import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingConfirmationComponent } from './parking-confirmation/parking-confirmation.component';
import { PhoneNumberModalComponent } from './phone-number-modal/phone-number-modal.component';
import { MatStyleModule } from 'src/app/mat-style.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ParkingConfirmationComponent, PhoneNumberModalComponent],
  imports: [
    CommonModule,
    MatStyleModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ParkingConfirmationComponent, PhoneNumberModalComponent],
})
export class ModalsModule {}
