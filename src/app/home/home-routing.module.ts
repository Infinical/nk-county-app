import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_utils/guards/auth.guard';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'parking',
    loadChildren: () =>
      import('./parking/parking.module').then((m) => m.ParkingModule),
  },
  {
    path: 'business-licensing',
    loadChildren: () =>
      import('./business-licensing/business-licensing.module').then(
        (m) => m.BusinessLicensingModule
      ),
  },
  {
    path: 'market-cess',
    loadChildren: () =>
      import('./market-cess/market-cess.module').then(
        (m) => m.MarketCessModule
      ),
  },
  {
    path: 'property-management',
    loadChildren: () =>
      import('./property-management/property-management.module').then(
        (m) => m.PropertyManagementModule
      ),
  },
  {
    path: 'essential-services',
    loadChildren: () =>
      import('./essential-services/essential-services.module').then(
        (m) => m.EssentialServicesModule
      ),
  },
  {
    path: 'health-services',
    loadChildren: () =>
      import('./health-services/health-services.module').then(
        (m) => m.HealthServicesModule
      ),
  },
  {
    path: 'land-services',
    loadChildren: () =>
      import('./land-services/land-services.module').then(
        (m) => m.LandServicesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
