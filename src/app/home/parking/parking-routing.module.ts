import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/_utils/guards/auth.guard';
import { DailyComponent } from './daily/daily.component';
import { OffstreetComponent } from './offstreet/offstreet.component';
import { ParkingComponent } from './parking.component';
import { ReservedComponent } from './reserved/reserved.component';
import { SeasonalComponent } from './seasonal/seasonal.component';

const routes: Routes = [
  {
    path: '',
    component: ParkingComponent,
  },
  {
    path: 'daily',
    component: DailyComponent,
  },
  {
    path: 'seasonal',
    component: SeasonalComponent,
  },
  {
    path: 'offstreet',
    component: OffstreetComponent,
  },
  {
    path: 'reserved',
    component: ReservedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkingRoutingModule {}
