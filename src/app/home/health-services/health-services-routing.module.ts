import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmbulanceServicesComponent } from './ambulance-services/ambulance-services.component';
import { FoodHandlersCertificateComponent } from './food-handlers-certificate/food-handlers-certificate.component';
import { HealthCertificateComponent } from './health-certificate/health-certificate.component';
import { HealthServicesComponent } from './health-services.component';
import { OtherHealthServicesComponent } from './other-health-services/other-health-services.component';

const routes: Routes = [
  { path: '', component: HealthServicesComponent },
  {
    path: 'health-certificate',
    component: HealthCertificateComponent,
  },
  { path: 'ambulance-services', component: AmbulanceServicesComponent },
  { path: 'other-health-services', component: OtherHealthServicesComponent },
  {
    path: 'food-handlers-certificate',
    component: FoodHandlersCertificateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthServicesRoutingModule {}
