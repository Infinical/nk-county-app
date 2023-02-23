import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class HealthServicesService {
  constructor(private http: HttpClient) {}

  getSubcounties(): Observable<any> {
    return this.http.get(
      environment.baseUrl +
        '/health-services-service/food-handler-certificate/subcounties'
    );
  }

  getWards(id: string): Observable<any> {
    return this.http.get(
      environment.baseUrl +
        `/health-services-service/food-handler-certificate/wards/${id}`
    );
  }

  getCountyHospitals(params: any): Observable<any> {
    return this.http.get(
      environment.baseUrl +
        '/health-services-service/food-handler-certificate/get-county-hospitals'
    );
  }

  getFoodHandlersCertificatePricing(payload: any): Observable<any> {
    return this.http.get(
      environment.baseUrl +
        '/health-services-service/food-handler-certificate/get-pricing'
    );
  }

  getSBPs(): Observable<any> {
    return this.http.get(
      environment.baseUrl + '/health-services-service/health-certificate/sbps'
    );
  }
}
