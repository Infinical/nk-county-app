import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { PolicyComponent } from './policy/policy.component';
import { ProfileInformationComponent } from './profile-information/profile-information.component';

import { ProfilePage } from './profile.page';
import { SecurityComponent } from './security/security.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
  },
  {
    path: 'profile-information',
    component: ProfileInformationComponent,
  },
  {
    path: 'security',
    component: SecurityComponent,
  },
  {
    path: 'help',
    component: HelpComponent,
  },
  {
    path: 'policy',
    component: PolicyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
