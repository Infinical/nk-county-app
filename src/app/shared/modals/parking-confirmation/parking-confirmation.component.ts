/* eslint-disable no-underscore-dangle */
import { Component, Input, OnInit } from '@angular/core';
import { BusinessLicensingService } from 'src/app/_services/business-licensing.service';
import { ParkingService } from 'src/app/_services/parking.service';
import { PopupModalService } from 'src/app/_services/popup-modal.service';
import { ToastService } from 'src/app/_services/toast.service';

@Component({
  selector: 'app-parking-confirmation',
  templateUrl: './parking-confirmation.component.html',
  styleUrls: ['./parking-confirmation.component.scss'],
})
export class ParkingConfirmationComponent implements OnInit {
  @Input() data: any;
  loading = false;
  constructor(
    private popupModalService: PopupModalService,
    private parkingService: ParkingService,
    private toastService: ToastService,
    private businessLicensingService: BusinessLicensingService
  ) {}

  ngOnInit() {
    console.log(this.data);
  }

  close() {
    this.popupModalService.dismissModal();
  }

  continue() {
    if (this.data.flow === 'seasonalparking') {
      this.createBill();
    } else if (this.data.flow === 'reservedparking') {
      this.createReservedParking();
    } else if (this.data.flow === 'singlebusinesspermit') {
      this.createSbpBill();
    } else if (this.data.flow === 'foodhandlercert') {
      this.createFoodHandlerCertBill();
    } else {
      this.close();
      this.popupModalService.presentPhoneNumberEntryModal(this.data);
    }
  }

  getEndDate() {
    const startDate = new Date(this.data.startDate);
    const endDate = startDate.setMonth(
      startDate.getMonth() + this.data.duration.value
    );

    return new Date(endDate);
  }

  createBill() {
    Object.assign(this.data, { endDate: this.getEndDate() });
    const billPayload = {
      duration: this.data.duration.value,
      price: this.data.price,
      // eslint-disable-next-line no-underscore-dangle
      vehicleType: this.data.vehicleType._id,
      startDate: this.data.startDate,
      endDate: this.data.endDate,
      plateNo: this.data.plateNo,
    };
    this.parkingService.createBillSeasonalParking(billPayload).subscribe(
      (res) => {
        if (res.success) {
          this.loading = false;
          this.close();
          this.toastService.presentToast(res.message, 'success');
          Object.assign(this.data, { billReferenceNo: res.data.referenceNo });
          this.popupModalService.presentPhoneNumberEntryModal(this.data);
        }
      },
      (err) => {
        this.loading = false;
        this.toastService.presentToast(err.message, 'error');
      }
    );
  }

  createSbpBill() {
    this.loading = true;
    const payload = {
      businessCategory: this.data.businessCategory._id,
      subcounty: this.data.subcounty._id,
      ward: this.data.ward._id,
    };
    Object.assign(this.data, payload);
    this.businessLicensingService.createBill(this.data).subscribe(
      (res) => {
        if (res.success) {
          this.loading = false;
          this.close();
          this.toastService.presentToast(res.message, 'success');
          Object.assign(this.data, { billReferenceNo: res.data.referenceNo });
          this.popupModalService.presentPhoneNumberEntryModal(this.data);
        }
      },
      (err) => {
        this.loading = false;
        this.toastService.presentToast(err.message, 'error');
      }
    );
  }

  createFoodHandlerCertBill() {}

  createReservedParking() {}
}
