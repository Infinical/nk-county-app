import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ParkingService } from 'src/app/_services/parking.service';
import { PopupModalService } from 'src/app/_services/popup-modal.service';
import { ToastService } from 'src/app/_services/toast.service';

interface ParkingZone {
  viewValue: string;
  value: string;
}

interface VehicleType {
  viewValue: string;
  value: string;
}
@Component({
  selector: 'app-reserved',
  templateUrl: './reserved.component.html',
  styleUrls: ['./reserved.component.scss'],
})
export class ReservedComponent implements OnInit {
  minDate = new Date();
  reservedParkingTypes: any = [];
  subCounties: any = [];
  wards: any = [];
  loading = false;
  wardsLoading = false;
  reservedParkingForm: FormGroup;

  step = 0;
  constructor(
    private router: Router,
    private parkingService: ParkingService,
    private fb: FormBuilder,
    private toastService: ToastService,
    private popupService: PopupModalService
  ) {}

  ngOnInit() {
    this.initForms();
    this.getReservedParkingType();
    this.getSubCounties();
  }

  initForms() {
    this.reservedParkingForm = this.fb.group({
      reservedParkingType: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      subCounty: ['', Validators.required],
      ward: ['', Validators.required],
      slots: ['', Validators.required],
      plateNo: ['', Validators.required],
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  onReservedParkingTypeBooking() {
    const reservedForm = this.reservedParkingForm.getRawValue();
    Object.assign(reservedForm, { flow: 'reservedparking', price: 0 });
    this.popupService.presentConfirmationModal(reservedForm);
  }

  getReservedParkingType() {
    this.loading = true;
    this.parkingService.getReservedParkingTypes().subscribe(
      (res) => {
        if (res.success) {
          this.reservedParkingTypes = res.data;
          this.loading = false;
        }
      },
      (err) => {
        this.loading = false;
        this.toastService.presentToast(err.message, 'error');
      }
    );
  }

  getSubCounties() {
    this.loading = true;
    this.parkingService.getSubCounties().subscribe(
      (res) => {
        if (res.success) {
          this.loading = false;
          this.subCounties = res.data;
        }
      },
      (err) => {
        this.loading = false;
        this.toastService.presentToast(err.message, 'error');
      }
    );
  }

  getWards(subCountyId: string) {
    this.wardsLoading = true;
    this.parkingService.getWards(subCountyId).subscribe(
      (res) => {
        if (res.success) {
          this.wardsLoading = false;
          this.wards = res.data;
        } else {
          this.toastService.presentToast(res.message, 'error');
        }
      },
      (err) => {
        this.wardsLoading = false;
        this.toastService.presentToast(err.message, 'error');
      }
    );
  }

  onSubCountySelected(event) {
    // eslint-disable-next-line no-underscore-dangle
    this.getWards(event.value._id);
  }
}
