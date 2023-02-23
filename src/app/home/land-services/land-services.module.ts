import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandServicesRoutingModule } from './land-services-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatStyleModule } from 'src/app/mat-style.module';
import { GroundRentComponent } from './ground-rent/ground-rent.component';
import { LandClearanceComponent } from './land-clearance/land-clearance.component';
import { LandRecordsComponent } from './land-records/land-records.component';
import { LandServiceApplicationComponent } from './land-service-application/land-service-application.component';
import { LandSurveyComponent } from './land-survey/land-survey.component';
import { LandTransferComponent } from './land-transfer/land-transfer.component';
import { PropertyDevelopmentApplicationComponent } from './property-development-application/property-development-application.component';
import { RateSearchComponent } from './rate-search/rate-search.component';
import { LandServicesComponent } from './land-services.component';

@NgModule({
  declarations: [
    LandServicesComponent,
    GroundRentComponent,
    LandClearanceComponent,
    LandRecordsComponent,
    LandServiceApplicationComponent,
    LandSurveyComponent,
    LandTransferComponent,
    PropertyDevelopmentApplicationComponent,
    RateSearchComponent,
  ],
  imports: [
    CommonModule,
    LandServicesRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    MatStyleModule,
  ],
})
export class LandServicesModule {}
