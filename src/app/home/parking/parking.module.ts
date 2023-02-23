import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParkingRoutingModule } from './parking-routing.module';
import { IonicModule } from '@ionic/angular';
import { ParkingComponent } from './parking.component';
import { OffstreetComponent } from './offstreet/offstreet.component';
import { DailyComponent } from './daily/daily.component';
import { SeasonalComponent } from './seasonal/seasonal.component';
import { ReservedComponent } from './reserved/reserved.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStyleModule } from 'src/app/mat-style.module';
import { ModalsModule } from 'src/app/shared/modals/modals.module';
import { ToastService } from 'src/app/_services/toast.service';

@NgModule({
  declarations: [
    ParkingComponent,
    OffstreetComponent,
    DailyComponent,
    SeasonalComponent,
    ReservedComponent,
  ],
  imports: [
    CommonModule,
    ParkingRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    MatStyleModule,
    ModalsModule,
  ],
  providers: [ToastService],
})
export class ParkingModule {}
