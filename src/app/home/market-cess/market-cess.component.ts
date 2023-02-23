import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Market } from 'src/app/_models/market-cess.model';
import { MarketCessService } from 'src/app/_services/market-cess.service';
import { PopupModalService } from 'src/app/_services/popup-modal.service';
import { ToastService } from 'src/app/_services/toast.service';

@Component({
  selector: 'app-market-cess',
  templateUrl: './market-cess.component.html',
  styleUrls: ['./market-cess.component.scss'],
})
export class MarketCessComponent implements OnInit {
  markets: Market[] = [];

  marketCessForm: FormGroup;
  loading = false;
  constructor(
    private readonly fb: FormBuilder,
    private router: Router,
    private marketCessService: MarketCessService,
    private popupModalService: PopupModalService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.initForm();
    this.getMarkets();
  }

  initForm() {
    this.marketCessForm = this.fb.group({
      market: ['', [Validators.required]],
      slots: ['', [Validators.required]],
      idNumber: ['', [Validators.required]],
    });
  }

  getMarkets() {
    this.marketCessService.getMarkets().subscribe((res) => {
      if (res.success) {
        this.markets = res.data;
      }
    });
  }

  confirmDetails() {
    this.loading = true;
    const payload = {
      // eslint-disable-next-line no-underscore-dangle
      marketId: this.marketCessForm.controls.market.value._id,
      slots: Number(this.marketCessForm.controls.slots.value),
      idNumber: this.marketCessForm.controls.idNumber.value,
    };

    this.marketCessService.getMarketPricing(payload).subscribe(
      (res) => {
        this.loading = false;
        const marketCessForm = this.marketCessForm.getRawValue();
        Object.assign(marketCessForm, {
          flow: 'marketcess',
          price: res.data.price,
        });
        this.popupModalService.presentConfirmationModal(marketCessForm);
      },
      (err) => {
        this.loading = false;
        this.toastService.presentToast(err.message, 'error');
      }
    );
  }
}
