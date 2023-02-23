import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class MarketCessService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getMarkets(): Observable<any> {
    return this.http.get(
      environment.baseUrl + '/market-cess-service/market-cess/get-markets'
    );
  }

  getMarketPricing(payload: any): Observable<any> {
    return this.http.post(
      environment.baseUrl + '/market-cess-service/market-cess/get-pricing',
      Object.assign(payload, { countyId: this.authService.countyId })
    );
  }

  makePayment(payload: any): Observable<any> {
    return this.http.post(
      environment.baseUrl + '/market-cess-service/market-cess/make-payment',
      Object.assign(payload, { countyId: this.authService.countyId })
    );
  }
}
