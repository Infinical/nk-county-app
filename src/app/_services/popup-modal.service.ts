import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ParkingConfirmationComponent } from '../shared/modals/parking-confirmation/parking-confirmation.component';
import { PhoneNumberModalComponent } from '../shared/modals/phone-number-modal/phone-number-modal.component';

@Injectable({
  providedIn: 'root',
})
export class PopupModalService {
  constructor(private modalCtrl: ModalController) {}

  async presentConfirmationModal(details) {
    const modal = await this.modalCtrl.create({
      component: ParkingConfirmationComponent,
      componentProps: {
        data: details,
      },
    });
    return await modal.present();
  }

  async presentPhoneNumberEntryModal(details) {
    const modal = await this.modalCtrl.create({
      component: PhoneNumberModalComponent,
      componentProps: {
        data: details,
      },
    });
    return await modal.present();
  }

  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }
}
