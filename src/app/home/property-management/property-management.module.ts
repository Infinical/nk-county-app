import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyManagementRoutingModule } from './property-management-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatStyleModule } from 'src/app/mat-style.module';
import { TenancyApplicationComponent } from './tenancy-application/tenancy-application.component';
import { TenancyTransferComponent } from './tenancy-transfer/tenancy-transfer.component';
import { PropertyManagementComponent } from './property-management.component';

@NgModule({
  declarations: [
    TenancyApplicationComponent,
    TenancyTransferComponent,
    PropertyManagementComponent,
  ],
  imports: [
    CommonModule,
    PropertyManagementRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    MatStyleModule,
  ],
})
export class PropertyManagementModule {}
