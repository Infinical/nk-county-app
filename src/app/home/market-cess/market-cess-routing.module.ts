import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketCessComponent } from './market-cess.component';

const routes: Routes = [{ path: '', component: MarketCessComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketCessRoutingModule {}
