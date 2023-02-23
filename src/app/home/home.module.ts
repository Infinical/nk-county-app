import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { MatStyleModule } from '../mat-style.module';
import { FrequentlyUsedComponent } from './components/frequently-used/frequently-used.component';
import { TrendingComponent } from './components/trending/trending.component';
import { ServicesComponent } from './components/services/services.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatStyleModule,
  ],
  declarations: [
    HomePage,
    FrequentlyUsedComponent,
    TrendingComponent,
    ServicesComponent,
  ],
})
export class HomePageModule {}
