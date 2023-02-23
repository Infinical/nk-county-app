import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ParkingService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  // Get parking zones
  getParkingZones(): Observable<any> {
    return this.http.get(
      environment.baseUrl + '/parking-service/daily-parking/parking-zones'
    );
  }

  // Get parking zones
  getVehicleTypes(): Observable<any> {
    return this.http.get(
      environment.baseUrl + '/parking-service/daily-parking/vehicle-types'
    );
  }

  // Check Pricing
  getDailyParkingPricing(payload: any): Observable<any> {
    return this.http.post(
      environment.baseUrl + '/parking-service/daily-parking/get-pricing',
      Object.assign(payload, { countyId: this.authService.countyId })
    );
  }

  getSeasonalParkingPricing(payload: any): Observable<any> {
    return this.http.post(
      environment.baseUrl + '/parking-service/seasonal-parking/get-pricing',
      Object.assign(payload, { countyId: this.authService.countyId })
    );
  }

  //Make payment
  payDailyParking(payload: any): Observable<any> {
    return this.http.post(
      environment.baseUrl + '/parking-service/daily-parking/make-payment',
      Object.assign(payload, { countyId: this.authService.countyId })
    );
  }

  //Make Seasonal payment
  paySeasonalParking(payload: any): Observable<any> {
    return this.http.post(
      environment.baseUrl + '/parking-service/seasonal-parking/make-payment',
      Object.assign(payload, { countyId: this.authService.countyId })
    );
  }

  // Create bill for seasonal parking
  createBillSeasonalParking(payload): Observable<any> {
    return this.http.post(
      environment.baseUrl + '/parking-service/seasonal-parking/create-bill',
      Object.assign(payload, { countyId: this.authService.countyId })
    );
  }

  // Get Reserved Parking Types
  getReservedParkingTypes(): Observable<any> {
    return this.http.get(
      environment.baseUrl + '/county-service/reserved-parking-type'
    );
  }

  // Get Subcounties
  getSubCounties(): Observable<any> {
    return this.http.get(environment.baseUrl + '/county-service/subcounties');
  }

  // Get wards
  getWards(subCountyId: string): Observable<any> {
    return this.http.get(
      environment.baseUrl +
        `/county-service/wards/wards-in-subcounty/${subCountyId}`
    );
  }
}
