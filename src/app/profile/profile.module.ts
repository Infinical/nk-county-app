import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { MatStyleModule } from '../mat-style.module';
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import { SecurityComponent } from './security/security.component';
import { PolicyComponent } from './policy/policy.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    MatStyleModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ProfilePage,
    ProfileInformationComponent,
    SecurityComponent,
    PolicyComponent,
    HelpComponent,
  ],
})
export class ProfilePageModule {}
