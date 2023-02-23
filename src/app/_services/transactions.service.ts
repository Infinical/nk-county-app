import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  constructor(private http: HttpClient) {}

  getMyBills(): Observable<any> {
    return this.http.get(
      environment.baseUrl + '/county-service/billing/get-my-bills'
    );
  }

  getMyTransactions(): Observable<any> {
    return this.http.get(
      environment.baseUrl + '/county-service/transactions/get-my-transactions'
    );
  }

  getMyOutstandingBill(): Observable<any> {
    return this.http.get(
      environment.baseUrl + '/county-service/billing/get-my-outstanding-bill'
    );
  }
}
