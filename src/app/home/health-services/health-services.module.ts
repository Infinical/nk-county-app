import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthServicesRoutingModule } from './health-services-routing.module';
import { AmbulanceServicesComponent } from './ambulance-services/ambulance-services.component';
import { OtherHealthServicesComponent } from './other-health-services/other-health-services.component';
import { HealthCertificateComponent } from './health-certificate/health-certificate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatStyleModule } from 'src/app/mat-style.module';
import { HealthServicesComponent } from './health-services.component';
import { FoodHandlersCertificateComponent } from './food-handlers-certificate/food-handlers-certificate.component';

@NgModule({
  declarations: [
    HealthServicesComponent,
    AmbulanceServicesComponent,
    OtherHealthServicesComponent,
    HealthCertificateComponent,
    FoodHandlersCertificateComponent,
  ],
  imports: [
    CommonModule,
    HealthServicesRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    MatStyleModule,
  ],
})
export class HealthServicesModule {}
