import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EssentialServicesRoutingModule } from './essential-services-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { BusShelterServicesComponent } from './bus-shelter-services/bus-shelter-services.component';
import { CooperativeComponent } from './cooperative/cooperative.component';
import { EducationComponent } from './education/education.component';
import { EnvironmentComponent } from './environment/environment.component';
import { FireAndDisasterComponent } from './fire-and-disaster/fire-and-disaster.component';
import { RoadsAndPublicWorksComponent } from './roads-and-public-works/roads-and-public-works.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatStyleModule } from 'src/app/mat-style.module';
import { EssentialServicesComponent } from './essential-services.component';

@NgModule({
  declarations: [
    EssentialServicesComponent,
    AdminComponent,
    AgricultureComponent,
    BusShelterServicesComponent,
    CooperativeComponent,
    EducationComponent,
    EnvironmentComponent,
    FireAndDisasterComponent,
    RoadsAndPublicWorksComponent,
  ],
  imports: [
    CommonModule,
    EssentialServicesRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    MatStyleModule,
  ],
})
export class EssentialServicesModule {}
