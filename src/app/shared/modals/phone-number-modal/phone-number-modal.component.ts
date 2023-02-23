/* eslint-disable no-underscore-dangle */
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusinessLicensingService } from 'src/app/_services/business-licensing.service';
import { MarketCessService } from 'src/app/_services/market-cess.service';
import { ParkingService } from 'src/app/_services/parking.service';
import { PopupModalService } from 'src/app/_services/popup-modal.service';
import { ToastService } from 'src/app/_services/toast.service';

@Component({
  selector: 'app-phone-number-modal',
  templateUrl: './phone-number-modal.component.html',
  styleUrls: ['./phone-number-modal.component.scss'],
})
export class PhoneNumberModalComponent implements OnInit {
  @Input() data: any;
  phoneNoForm: FormGroup;
  loading = false;

  panelOpenState = {
    mpesa: false,
    cards: false,
    airtel: false,
    pesalink: false,
    cash: false,
  };
  products = [];
  roles = [];
  constructor(
    private popupModalService: PopupModalService,
    private fb: FormBuilder,
    private parkingService: ParkingService,
    private marketCessService: MarketCessService,
    private toastService: ToastService,
    private router: Router,
    private businessLicensingService: BusinessLicensingService
  ) {}

  ngOnInit() {
    console.log(this.data);
    this.initForm();
  }

  close() {
    this.popupModalService.dismissModal();
  }

  initForm() {
    this.phoneNoForm = this.fb.group({
      phoneNumber: ['', [Validators.required]],
    });
  }

  submit() {
    switch (this.data.flow) {
      case 'dailyparking':
        this.payDailyParking();
        break;
      case 'seasonalparking':
        this.paySeasonalParking();
        break;
      case 'marketcess':
        this.payMarkteCess();
        break;
      case 'singlebusinesspermit':
        this.paySbp();
        break;
      default:
        break;
    }
  }

  formatPhoneNumber(phoneNumber: string): string {
    const char = phoneNumber[0];
    const replaced = phoneNumber.replace(char, '254');
    return replaced;
  }

  payDailyParking() {
    this.loading = true;
    const payload = {
      parkingZone: this.data.parkingZone._id,
      vehicleType: this.data.vehicleType._id,
      plateNo: this.data.licenceRegistrationNo,
      price: this.data.price,
      phoneNumber: this.formatPhoneNumber(
        this.phoneNoForm.controls.phoneNumber.value
      ),
    };

    this.parkingService.payDailyParking(payload).subscribe(
      (res) => {
        if (res.success) {
          this.loading = false;
          this.toastService.presentToast(res.message, 'success');
          this.close();
          this.router.navigate(['/tabs/home'], { replaceUrl: true });
        } else {
          this.loading = false;
          this.toastService.presentToast(res.message, 'error');
        }
      },
      (err) => {
        this.loading = false;
        this.toastService.presentToast(err.message, 'error');
      }
    );
  }

  payMarkteCess() {
    this.loading = true;
    const payload = {
      slots: this.data.slots,
      idNumber: this.data.idNumber,
      market: this.data.market._id,
      price: this.data.price,
      phoneNumber: this.formatPhoneNumber(
        this.phoneNoForm.controls.phoneNumber.value
      ),
    };

    this.marketCessService.makePayment(payload).subscribe(
      (res) => {
        if (res.success) {
          this.toastService.presentToast(res.message, 'success');
          this.loading = false;
          this.close();
          this.router.navigate(['/tabs/home'], { replaceUrl: true });
        } else {
          this.loading = false;
          this.toastService.presentToast(res.message, 'error');
        }
      },
      (err) => {
        this.loading = false;
        this.toastService.presentToast(err.message, 'error');
      }
    );
  }

  paySeasonalParking() {
    this.loading = true;
    const payload = {
      billReferenceNo: this.data.billReferenceNo,
      phoneNumber: this.formatPhoneNumber(
        this.phoneNoForm.controls.phoneNumber.value
      ),
    };

    this.parkingService.paySeasonalParking(payload).subscribe(
      (res) => {
        if (res.success) {
          this.loading = false;
          this.toastService.presentToast(res.message, 'success');
          this.close();
          this.router.navigate(['/tabs/home'], { replaceUrl: true });
        } else {
          this.loading = false;
          this.toastService.presentToast(res.message, 'error');
        }
      },
      (err) => {
        this.loading = false;
        this.toastService.presentToast(err.message, 'error');
      }
    );
  }

  paySbp() {
    this.loading = true;
    const payload = {
      billReferenceNo: this.data.billReferenceNo,
      phoneNumber: this.formatPhoneNumber(
        this.phoneNoForm.controls.phoneNumber.value
      ),
    };

    this.businessLicensingService.makePayment(payload).subscribe(
      (res) => {
        if (res.success) {
          this.loading = false;
          this.toastService.presentToast(res.message, 'success');
          this.close();
          this.router.navigate(['/tabs/home'], { replaceUrl: true });
        } else {
          this.loading = false;
          this.toastService.presentToast(res.message, 'error');
        }
      },
      (err) => {
        this.loading = false;
        this.toastService.presentToast(err.message, 'error');
      }
    );
  }
}
