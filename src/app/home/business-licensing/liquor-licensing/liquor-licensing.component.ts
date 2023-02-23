/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HealthServicesService } from 'src/app/_services/health-services.service';
import { PopupModalService } from 'src/app/_services/popup-modal.service';
import { ToastService } from 'src/app/_services/toast.service';
import { mockData } from 'src/app/_utils/mock-data.constants';

@Component({
  selector: 'app-liquor-licensing',
  templateUrl: './liquor-licensing.component.html',
  styleUrls: ['./liquor-licensing.component.scss'],
})
export class LiquorLicensingComponent implements OnInit {
  step1: FormGroup;
  step2: FormGroup;
  sbpLoading = false;
  sbps: any[];

  get step1Form() {
    return this.step1.controls;
  }

  get step2Form() {
    return this.step2.controls;
  }

  loading = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private healthServices: HealthServicesService,
    private toastService: ToastService,
    private popupService: PopupModalService
  ) {}

  ngOnInit() {
    this.initForms();
    this.getSbps();
  }

  initForms() {
    this.step1 = this.fb.group({
      applicationType: ['individual', [Validators.required]],
      isSbpAvailable: ['', [Validators.required]],
      sbp: ['', Validators.required],
    });

    this.step2 = this.fb.group({
      subcounty: ['', [Validators.required]],
      ward: ['', [Validators.required]],
      category: ['', [Validators.required]],
      countyHospital: ['', [Validators.required]],
      streetName: ['', [Validators.required]],
      plotNo: ['', [Validators.required]],
    });
  }

  submit() {
    this.loading = true;
    const payload = {};
    this.healthServices
      .getFoodHandlersCertificatePricing(payload)
      .subscribe((res) => {
        if (res.success) {
          this.loading = false;
          this.popupService.presentConfirmationModal(
            Object.assign(
              this.step1.getRawValue(),
              this.step1.getRawValue(),
              this.step2.getRawValue(),
              { price: res.data.price, flow: 'foodhandlercert' }
            )
          );
        }
      });
  }

  onSbpAvailabeSelect(event) {
    // eslint-disable-next-line no-underscore-dangle
    if (event.value === 'no') {
      this.toastService.presentToast(
        'Please apply for a single business permit before you continue',
        'error'
      );
    }
  }

  getSbps() {
    this.sbpLoading = true;
    this.healthServices.getSBPs().subscribe(
      (res) => {
        if (res.success) {
          this.sbpLoading = false;
          this.sbps = res.data;
        }
      },
      (err) => {
        this.sbpLoading = false;
        this.toastService.presentToast(err.message, 'error');
      }
    );
  }
}
