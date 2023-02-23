import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketCessRoutingModule } from './market-cess-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatStyleModule } from 'src/app/mat-style.module';
import { MarketCessComponent } from './market-cess.component';

@NgModule({
  declarations: [MarketCessComponent],
  imports: [
    CommonModule,
    MarketCessRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    MatStyleModule,
  ],
})
export class MarketCessModule {}
