import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';
import { ToastService } from 'src/app/_services/toast.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss'],
})
export class SecurityComponent implements OnInit {
  changePasswordForm: FormGroup;
  loading = false;
  constructor(
    private toastService: ToastService,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.changePasswordForm = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmNewPassword: ['', Validators.required],
    });
  }

  onChangePassword() {
    if (
      this.changePasswordForm.valid &&
      this.changePasswordForm.controls.newPassword.value ===
        this.changePasswordForm.controls.confirmNewPassword.value
    ) {
      this.loading = true;
      this.authService
        .changePassword({
          newPassword: this.changePasswordForm.controls.newPassword.value,
        })
        .subscribe(
          (res) => {
            if (res.success) {
              this.loading = false;
              this.toastService.presentToast(res.message, 'succcess');
              this.authService.doLogout();
            }
          },
          (err) => {
            this.loading = false;
            this.toastService.presentToast(err.message, 'error');
          }
        );
    }
  }

  back() {
    this.router.navigate(['/tabs/profile'], { replaceUrl: true });
  }
}
