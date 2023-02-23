import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatStyleModule } from '../mat-style.module';
import { CompleteProfileComponent } from './complete-profile/complete-profile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    CompleteProfileComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    MatStyleModule,
  ],
  providers: [],
})
export class AuthModule {}
