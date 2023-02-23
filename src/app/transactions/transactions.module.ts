import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionsPageRoutingModule } from './transactions-routing.module';

import { TransactionsPage } from './transactions.page';
import { MatStyleModule } from '../mat-style.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionsPageRoutingModule,
    MatStyleModule,
  ],
  declarations: [TransactionsPage],
})
export class TransactionsPageModule {}
