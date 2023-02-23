import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class BusinessLicensingService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getBusinessCategories(): Observable<any> {
    return this.http.get(
      environment.baseUrl +
        '/business-licensing-service/single-business-permit/business-categories'
    );
  }

  getSubcounties(): Observable<any> {
    return this.http.get(
      environment.baseUrl +
        '/business-licensing-service/single-business-permit/subcounties'
    );
  }

  getWards(id: string): Observable<any> {
    return this.http.get(
      environment.baseUrl +
        `/business-licensing-service/single-business-permit/wards/${id}`
    );
  }

  getPricing(payload: any): Observable<any> {
    return this.http.post(
      environment.baseUrl +
        '/business-licensing-service/single-business-permit/get-pricing',
      Object.assign(payload, { countyId: this.authService.countyId })
    );
  }

  createBill(payload: any): Observable<any> {
    return this.http.post(
      environment.baseUrl +
        '/business-licensing-service/single-business-permit/create-bill',
      Object.assign(payload, { countyId: this.authService.countyId })
    );
  }

  makePayment(payload: any): Observable<any> {
    return this.http.post(
      environment.baseUrl +
        '/business-licensing-service/single-business-permit/make-payment',
      Object.assign(payload, { countyId: this.authService.countyId })
    );
  }
}
