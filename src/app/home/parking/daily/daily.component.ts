/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { ParkingService } from 'src/app/_services/parking.service';
import { PopupModalService } from 'src/app/_services/popup-modal.service';
import { SpinnerService } from 'src/app/_services/spinner.service';
import { ToastService } from 'src/app/_services/toast.service';

interface ParkingZone {
  _id: string;
  zoneName: string;
  zoneDescription?: string;
}

interface VehicleType {
  _id: string;
  name: string;
  description?: string;
}
@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss'],
})
export class DailyComponent implements OnInit {
  dailyForm: FormGroup;
  zones: ParkingZone[] = [];
  vehicleTypes: VehicleType[] = [];

  loading = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private popupService: PopupModalService,
    private parkingService: ParkingService,
    private spinnerService: SpinnerService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.initForm();
    this.getParkingTypes();
    this.getVehicleTypes();
    this.loadingListener();
  }

  loadingListener(): void {
    this.spinnerService.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading: boolean) => {
        this.loading = loading;
      });
  }

  initForm() {
    this.dailyForm = this.fb.group({
      parkingZone: ['', [Validators.required]],
      vehicleType: ['', [Validators.required]],
      licenceRegistrationNo: ['', [Validators.required]],
      price: [0],
    });
  }

  getParkingTypes() {
    this.parkingService.getVehicleTypes().subscribe(
      (res) => {
        this.vehicleTypes = res.data;
      },
      (err) => {
        this.toastService.presentToast(err.message, 'error');
      }
    );
  }

  getVehicleTypes() {
    this.parkingService.getParkingZones().subscribe((res) => {
      this.zones = res.data;
    });
  }

  onConfirmPrice() {
    const payload = {
      parkingZone: this.dailyForm.controls.parkingZone.value._id,
      vehicleType: this.dailyForm.controls.vehicleType.value._id,
    };
    this.parkingService.getDailyParkingPricing(payload).subscribe((res) => {
      const dailyForm = this.dailyForm.getRawValue();
      Object.assign(dailyForm, { flow: 'dailyparking', price: res.data.price });
      this.popupService.presentConfirmationModal(dailyForm);
    });
  }
}
