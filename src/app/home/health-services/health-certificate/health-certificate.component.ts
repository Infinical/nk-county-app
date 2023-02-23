/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HealthServicesService } from 'src/app/_services/health-services.service';
import { PopupModalService } from 'src/app/_services/popup-modal.service';
import { ToastService } from 'src/app/_services/toast.service';
import { mockData } from 'src/app/_utils/mock-data.constants';

@Component({
  selector: 'app-health-certificate',
  templateUrl: './health-certificate.component.html',
  styleUrls: ['./health-certificate.component.scss'],
})
export class HealthCertificateComponent implements OnInit {
  step1: FormGroup;
  step2: FormGroup;
  mock = mockData;

  subcounties: any[];
  wards: any[];
  sbps: any[];

  wardsLoading = false;
  hospLoading = false;

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
    this.getSubcounties();
    this.getSbps();
  }

  initForms() {
    this.step1 = this.fb.group({
      subcounty: ['', [Validators.required]],
      ward: ['', [Validators.required]],
      sbp: ['', [Validators.required]],
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

  getSubcounties() {
    this.healthServices.getSubcounties().subscribe((res) => {
      if (res.success) {
        this.subcounties = res.data;
      }
    });
  }

  onSubCountySelected(event) {
    // eslint-disable-next-line no-underscore-dangle
    this.getWards(event.value._id);
  }

  getWards(id: string) {
    this.wardsLoading = true;
    this.healthServices.getWards(id).subscribe(
      (res) => {
        if (res.success) {
          this.wardsLoading = false;
          this.wards = res.data;
        }
      },
      (err) => {
        this.wardsLoading = false;
        this.toastService.presentToast(err.message, 'error');
      }
    );
  }

  getSbps() {
    this.healthServices.getSBPs().subscribe(
      (res) => {
        if (res.success) {
          this.sbps = res.data;
        }
      },
      (err) => {
        this.toastService.presentToast(err.message, 'error');
      }
    );
  }
}
