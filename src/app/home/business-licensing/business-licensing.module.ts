import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessLicensingRoutingModule } from './business-licensing-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatStyleModule } from 'src/app/mat-style.module';
import { BusinessLicensingComponent } from './business-licensing.component';
import { BettingAndGamingComponent } from './betting-and-gaming/betting-and-gaming.component';
import { BusinessPermitsComponent } from './business-permits/business-permits.component';
import { LiquorLicensingComponent } from './liquor-licensing/liquor-licensing.component';
import { WeightsAndMeasuresComponent } from './weights-and-measures/weights-and-measures.component';

@NgModule({
  declarations: [
    BusinessLicensingComponent,
    BettingAndGamingComponent,
    BusinessPermitsComponent,
    LiquorLicensingComponent,
    WeightsAndMeasuresComponent,
  ],
  imports: [
    CommonModule,
    BusinessLicensingRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    MatStyleModule,
  ],
})
export class BusinessLicensingModule {}
