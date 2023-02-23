import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from './state.service';
import {
  RegistrationInfo,
  ProfileAttributes,
  TokenResponseModel,
} from '../_models/auth.model';
import { StorageService } from './storage.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import jwtDecode, * as jwDecode from 'jwt-decode';
interface AuthState {
  loggedIn: boolean;
  registrationInfo: RegistrationInfo;
  profileAttributes: ProfileAttributes;
  userId: string;
  userDetails: any;
}

const initialState: AuthState = {
  loggedIn: false,
  registrationInfo: {} as any,
  profileAttributes: {} as any,
  userId: '',
  userDetails: {},
};
@Injectable({
  providedIn: 'root',
})
export class AuthService extends StateService<AuthState> {
  registrationInfo$: Observable<RegistrationInfo> = this.select(
    (state) => state.registrationInfo
  );

  profileAttributes$: Observable<ProfileAttributes> = this.select(
    (state) => state.profileAttributes
  );

  userDetails$: Observable<any> = this.select((state) => state.userDetails);

  userId$: Observable<string> = this.select((state) => state.userId);
  constructor(
    private storageService: StorageService,
    private http: HttpClient,
    private router: Router
  ) {
    super(initialState);
  }

  setRegistrationInfo(registrationInfo: any) {
    this.setState({ registrationInfo });
  }

  setUserId(userId: string) {
    this.setState({ userId });
  }

  setUserDetails(userDetails: any) {
    this.setState({ userDetails });
  }

  registerUser(payload: any): Observable<any> {
    return this.http.post(
      environment.baseUrl + '/county-service/customers/create-customer',
      payload
    );
  }

  get isTokenActive(): boolean {
    try {
      return this.accessToken
        ? (this.accessToken?.tokenExpirationDate || 0) > new Date().getTime()
        : false;
    } catch (error) {
      return false;
    }
  }

  get accessToken(): TokenResponseModel {
    const token = this.storageService.getData('access_token');
    return token;
  }

  get countyId(): string {
    const userDetails = this.storageService.getData('user-details');
    if (userDetails) {
      return userDetails.attributes.countyId[0];
    } else {
      return '';
    }
  }

  setToken(accessToken: TokenResponseModel): void {
    accessToken.tokenExpirationDate = new Date(
      new Date().getTime() + accessToken.expires_in * 1000
    ).getTime();
    this.storageService.setData('access_token', accessToken);
  }

  doLogout() {
    this.storageService.removeData('access_token');
    this.router.navigate(['/landing']);
  }

  login(payload: any): Observable<any> {
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const params = new HttpParams({
      fromObject: payload,
    });

    return this.http.post(environment.keycloakApiUrl, params.toString(), {
      headers,
    });
  }

  forgotPassword(payload: any): Observable<any> {
    return this.http.post(
      environment.baseUrl + '/county-service/customers/forgot-password',
      payload
    );
  }

  resetPassword(id: string, payload: any): Observable<any> {
    return this.http.post(
      environment.baseUrl + `/county-service/customers/reset-password/${id}`,
      payload
    );
  }

  changePassword(payload: any): Observable<any> {
    return this.http.post(
      environment.baseUrl + `/county-service/customers/change-password`,
      Object.assign(payload, { countyId: this.countyId })
    );
  }

  // Decode token to get user id, then get the user representattion using the id
  async getUserDetails() {
    this.http
      .get<any>(
        environment.baseUrl + '/county-service/customers/get-customer-profile'
      )
      .subscribe((res) => {
        if (res.success) {
          this.storageService.setData('user-details', res.data);
          this.setUserDetails(res.data);
        }
      });
  }

  updateCustomer(payload: any): Observable<any> {
    return this.http.put(
      environment.baseUrl + '/county-service/customers',
      payload
    );
  }

  getCountyWithCode(params: any): Observable<any> {
    return this.http.get(
      environment.baseUrl + '/county-service/customers/get-county-with-code',
      { params }
    );
  }
}
