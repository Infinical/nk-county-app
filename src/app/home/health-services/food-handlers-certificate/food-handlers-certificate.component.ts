/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusinessLicensingService } from 'src/app/_services/business-licensing.service';
import { HealthServicesService } from 'src/app/_services/health-services.service';
import { PopupModalService } from 'src/app/_services/popup-modal.service';
import { ToastService } from 'src/app/_services/toast.service';
import { mockData } from 'src/app/_utils/mock-data.constants';

@Component({
  selector: 'app-food-handlers-certificate',
  templateUrl: './food-handlers-certificate.component.html',
  styleUrls: ['./food-handlers-certificate.component.scss'],
})
export class FoodHandlersCertificateComponent implements OnInit {
  step1: FormGroup;
  step2: FormGroup;
  mock = mockData;

  subcounties: any[];
  categories: any[];
  wards: any[];
  countyHospitals: any[];

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
  }

  initForms() {
    this.step1 = this.fb.group({
      applicationType: ['individual', [Validators.required]],
      employmentStatus: ['', [Validators.required]],
      employerName: [''],
      employerPhysicalAddress: [''],
      foodHandlersCertificateType: ['', [Validators.required]],
      previousApplication: [],
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

  onHospitalCategorySelected(event: any) {
    this.getCountyHospitals(event.value._id);
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

  getCountyHospitals(id: string) {
    this.hospLoading = true;
    const params = {
      subcounty: this.step2Form.subcounty.value._id,
      ward: this.step2Form.ward.value._id,
      category: this.step2Form.category.value,
    };
    this.healthServices.getCountyHospitals(params).subscribe(
      (res) => {
        if (res.success) {
          this.hospLoading = false;
          this.countyHospitals = res.data;
        }
      },
      (err) => {
        this.hospLoading = false;
        this.toastService.presentToast(err.message, 'error');
      }
    );
  }
}
