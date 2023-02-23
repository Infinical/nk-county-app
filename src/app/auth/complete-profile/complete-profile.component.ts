/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationInfo } from 'src/app/_models/auth.model';
import { AuthService } from 'src/app/_services/auth.service';
import { ToastService } from 'src/app/_services/toast.service';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.scss'],
})
export class CompleteProfileComponent implements OnInit {
  completeProfileForm: FormGroup;
  loading = false;
  registrationInfo: RegistrationInfo;
  countyId: string;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private toastservice: ToastService
  ) {}

  ngOnInit() {
    this.getCountyWithCountyCode();
    this.initForm();
    this.authService.registrationInfo$.subscribe((res) => {
      this.registrationInfo = res;
    });
  }

  initForm() {
    this.completeProfileForm = this.fb.group({
      idNumber: ['', Validators.required],
      kraPin: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      idType: ['', Validators.required],
      profilePicture: [''],
    });
  }

  formatPhoneNumber(phoneNumber: string): string {
    const char = phoneNumber[0];
    const replaced = phoneNumber.replace(char, '254');
    return replaced;
  }

  onProfileComplete() {
    this.loading = true;
    const attributes = this.completeProfileForm.getRawValue();
    Object.assign(attributes, {
      phoneNumber: this.formatPhoneNumber(
        this.completeProfileForm.controls.phoneNumber.value
      ),
      countyId: this.countyId,
    });
    const payload = {
      username: this.completeProfileForm.controls.idNumber.value,
      email: this.registrationInfo.email,
      firstName: this.registrationInfo.firstName,
      lastName: this.registrationInfo.lastName,
      credentials: [
        {
          value: this.registrationInfo.password,
        },
      ],
      attributes,
    };

    this.authService.registerUser(payload).subscribe(
      (res) => {
        if (res.success) {
          this.loading = false;
          this.toastservice.presentToast(res.message, 'success');
          this.router.navigate(['/login'], { replaceUrl: true });
        }
      },
      (err) => {
        this.loading = false;
        this.toastservice.presentToast(err.message, 'error');
      }
    );
  }

  back() {
    this.router.navigate(['/register'], { replaceUrl: true });
  }

  getCountyWithCountyCode() {
    const params = {
      countyCode: '001',
    };
    this.authService.getCountyWithCode(params).subscribe((res) => {
      if (res.sucess) {
        this.countyId = res.data._id;
      }
    });
  }
}
