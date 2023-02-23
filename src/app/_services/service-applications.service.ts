import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceApplicationsService {
  constructor(private http: HttpClient) {}

  getSBPApplications(): Observable<any> {
    return this.http.get(
      environment.baseUrl +
        '/business-licensing-service/single-business-permit/my-sbps'
    );
  }

  getLiquorLicenseApplications(): Observable<any> {
    return this.http.get(
      environment.baseUrl +
        '/business-licensing-service/liquor-licensing/my-liquor-licenses'
    );
  }
}
