import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BettingAndGamingComponent } from './betting-and-gaming/betting-and-gaming.component';
import { BusinessLicensingComponent } from './business-licensing.component';
import { BusinessPermitsComponent } from './business-permits/business-permits.component';
import { LiquorLicensingComponent } from './liquor-licensing/liquor-licensing.component';
import { WeightsAndMeasuresComponent } from './weights-and-measures/weights-and-measures.component';

const routes: Routes = [
  { path: '', component: BusinessLicensingComponent },
  { path: 'business-permits', component: BusinessPermitsComponent },
  { path: 'liquor-licensing', component: LiquorLicensingComponent },
  { path: 'weights-and-measures', component: WeightsAndMeasuresComponent },
  { path: 'betting-and-gaming', component: BettingAndGamingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessLicensingRoutingModule {}
