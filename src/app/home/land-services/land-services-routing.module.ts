import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroundRentComponent } from './ground-rent/ground-rent.component';
import { LandClearanceComponent } from './land-clearance/land-clearance.component';
import { LandRecordsComponent } from './land-records/land-records.component';
import { LandServiceApplicationComponent } from './land-service-application/land-service-application.component';
import { LandServicesComponent } from './land-services.component';
import { LandSurveyComponent } from './land-survey/land-survey.component';
import { LandTransferComponent } from './land-transfer/land-transfer.component';
import { PropertyDevelopmentApplicationComponent } from './property-development-application/property-development-application.component';
import { RateSearchComponent } from './rate-search/rate-search.component';

const routes: Routes = [
  { path: '', component: LandServicesComponent },
  { path: 'ground-rent-services', component: GroundRentComponent },
  { path: 'land-clearance-services', component: LandClearanceComponent },
  { path: 'land-records-services', component: LandRecordsComponent },
  {
    path: 'land-service-application',
    component: LandServiceApplicationComponent,
  },
  { path: 'land-survey', component: LandSurveyComponent },
  { path: 'land-transfer', component: LandTransferComponent },
  {
    path: 'property-development-application',
    component: PropertyDevelopmentApplicationComponent,
  },
  { path: 'rate-search', component: RateSearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandServicesRoutingModule {}
