import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusinessLicensingService } from 'src/app/_services/business-licensing.service';
import { PopupModalService } from 'src/app/_services/popup-modal.service';
import { ToastService } from 'src/app/_services/toast.service';
import { mockData } from 'src/app/_utils/mock-data.constants';

@Component({
  selector: 'app-business-permits',
  templateUrl: './business-permits.component.html',
  styleUrls: ['./business-permits.component.scss'],
})
export class BusinessPermitsComponent implements OnInit {
  businessCategoryForm: FormGroup;
  businessDetailsForm: FormGroup;
  businessActivityForm: FormGroup;
  businessContactsForm: FormGroup;

  mock = mockData;

  subcounties: any[];
  categories: any[];
  wards: any[];

  wardsLoading = false;

  get bdForm() {
    return this.businessDetailsForm.controls;
  }
  get baForm() {
    return this.businessActivityForm.controls;
  }

  loading = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private businessLicensingService: BusinessLicensingService,
    private toastService: ToastService,
    private popupService: PopupModalService
  ) {}

  ngOnInit() {
    this.initForms();
    this.getBusinessCategories();
    this.getSubcounties();
  }

  initForms() {
    this.businessCategoryForm = this.fb.group({
      applicationType: ['', [Validators.required]],
    });

    this.businessDetailsForm = this.fb.group({
      businessName: ['', [Validators.required]],
      streetName: [''],
      subcounty: ['', [Validators.required]],
      ward: ['', [Validators.required]],
      buildingName: [''],
      floorNo: [''],
      roomNo: [''],
    });

    this.businessActivityForm = this.fb.group({
      businessCategory: ['', [Validators.required]],
      businessDescription: [''],
      noOfEmployees: ['', [Validators.required]],
      additionalActivity: [''],
    });

    this.businessContactsForm = this.fb.group({
      businessEmail: [''],
      businessPhoneNumber: [''],
      businessPostalAddress: [''],
      businessPostalCode: [''],
      contactPersonId: ['', [Validators.required]],
      contactPersonRole: [''],
      contactPersonName: ['', [Validators.required]],
      contactPersonEmail: ['', [Validators.email, Validators.required]],
      contactPersonPhoneNumber: ['', [Validators.required]],
    });
  }

  submit() {
    this.loading = true;
    const payload = {};
    this.businessLicensingService.getPricing(payload).subscribe((res) => {
      if (res.success) {
        this.loading = false;

        this.popupService.presentConfirmationModal(
          Object.assign(
            this.businessCategoryForm.getRawValue(),
            this.businessDetailsForm.getRawValue(),
            this.businessActivityForm.getRawValue(),
            this.businessContactsForm.getRawValue(),
            { price: res.data.price, flow: 'singlebusinesspermit' }
          )
        );
      }
    });
  }

  getBusinessCategories() {
    this.businessLicensingService.getBusinessCategories().subscribe((res) => {
      if (res.success) {
        this.categories = res.data;
      }
    });
  }

  getSubcounties() {
    this.businessLicensingService.getSubcounties().subscribe((res) => {
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
    this.businessLicensingService.getWards(id).subscribe(
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
}
