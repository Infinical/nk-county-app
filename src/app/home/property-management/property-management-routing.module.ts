import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyManagementComponent } from './property-management.component';
import { TenancyApplicationComponent } from './tenancy-application/tenancy-application.component';
import { TenancyTransferComponent } from './tenancy-transfer/tenancy-transfer.component';

const routes: Routes = [
  { path: '', component: PropertyManagementComponent },
  { path: 'tenancy-application', component: TenancyApplicationComponent },
  { path: 'tenancy-transfer', component: TenancyTransferComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyManagementRoutingModule {}
