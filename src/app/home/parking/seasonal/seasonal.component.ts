/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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

interface Duration {
  viewValue: string;
  value: number;
}
@Component({
  selector: 'app-seasonal',
  templateUrl: './seasonal.component.html',
  styleUrls: ['./seasonal.component.scss'],
})
export class SeasonalComponent implements OnInit {
  vehicleTypes: any;
  durations: Duration[] = [
    { value: 1, viewValue: 'Monthly Parking' },
    { value: 3, viewValue: '3 Months' },
    { value: 6, viewValue: '6 Months' },
    { value: 12, viewValue: '1 Year' },
  ];
  loading = false;
  minDate = new Date();
  seasonalForm: FormGroup;
  constructor(
    private router: Router,
    private parkingService: ParkingService,
    private fb: FormBuilder,
    private popupService: PopupModalService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.initForm();
    this.getVehicleTypes();
    // this.popupService.presentPhoneNumberEntryModal({});
  }

  initForm() {
    this.seasonalForm = this.fb.group({
      vehicleType: ['', Validators.required],
      duration: ['', Validators.required],
      startDate: ['', Validators.required],
      plateNo: ['', Validators.required],
    });
  }

  onConfirm() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/tabs/home/parking'], { replaceUrl: true });
    }, 4000);
  }

  getVehicleTypes() {
    this.loading = true;
    this.parkingService.getVehicleTypes().subscribe((res) => {
      if (res.success) {
        this.loading = false;
        this.vehicleTypes = res.data;
      }
    });
  }

  onConfirmPricing() {
    this.loading = true;
    const payload = {
      vehicleType: this.seasonalForm.controls.vehicleType.value._id,
      duration: this.seasonalForm.controls.duration.value.value,
    };

    this.parkingService.getSeasonalParkingPricing(payload).subscribe(
      (res) => {
        if (res.success) {
          this.loading = false;
          const seasonalForm = this.seasonalForm.getRawValue();
          Object.assign(seasonalForm, {
            flow: 'seasonalparking',
            price: res.data.price,
          });
          this.popupService.presentConfirmationModal(seasonalForm);
        }
      },
      (err) => {
        this.loading = false;
        this.toastService.presentToast(err.message, 'error');
      }
    );
  }
}
