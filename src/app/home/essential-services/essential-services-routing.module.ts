import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { BusShelterServicesComponent } from './bus-shelter-services/bus-shelter-services.component';
import { CooperativeComponent } from './cooperative/cooperative.component';
import { EducationComponent } from './education/education.component';
import { EnvironmentComponent } from './environment/environment.component';
import { EssentialServicesComponent } from './essential-services.component';
import { FireAndDisasterComponent } from './fire-and-disaster/fire-and-disaster.component';
import { RoadsAndPublicWorksComponent } from './roads-and-public-works/roads-and-public-works.component';

const routes: Routes = [
  { path: '', component: EssentialServicesComponent },
  { path: 'admin-services', component: AdminComponent },
  { path: 'agriculture-services', component: AgricultureComponent },
  { path: 'bus-shelter-services', component: BusShelterServicesComponent },
  { path: 'cooperative-services', component: CooperativeComponent },
  { path: 'education-services', component: EducationComponent },
  { path: 'environment-services', component: EnvironmentComponent },
  { path: 'fire-and-disaster-services', component: FireAndDisasterComponent },
  { path: 'roads-services', component: RoadsAndPublicWorksComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EssentialServicesRoutingModule {}
