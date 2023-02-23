import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';
import { ServiceApplicationsService } from '../_services/service-applications.service';
import { ToastService } from '../_services/toast.service';
import { TransactionsService } from '../_services/transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {
  myBills: any = [];
  myTransactions: any = [];
  myServiceApplications: any = [];
  outstandingBill: number;
  sbps: any[];
  constructor(
    private toastService: ToastService,
    private transactionService: TransactionsService,
    private serviceApplicationsService: ServiceApplicationsService
  ) {}

  ngOnInit() {
    this.getMyBills();
    this.getMyTransactions();
    this.getMyOutstandingBill();

    this.getMySBPs();
  }

  getMyBills() {
    this.transactionService.getMyBills().subscribe((res) => {
      if (res.success) {
        this.myBills = res.data;
      }
    });
  }

  getMyTransactions() {
    this.transactionService.getMyTransactions().subscribe((res) => {
      if (res.success) {
        this.myTransactions = res.data;
      }
    });
  }

  getMyOutstandingBill() {
    this.transactionService.getMyOutstandingBill().subscribe((res) => {
      if (res.success) {
        this.outstandingBill = res.data.sum;
      }
    });
  }

  getMySBPs() {
    this.serviceApplicationsService.getSBPApplications().subscribe((res) => {
      if (res.success) {
        this.sbps = res.data;
      }
    });
  }
}
