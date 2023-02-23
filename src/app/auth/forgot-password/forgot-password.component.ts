import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  loading = false;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.forgotPasswordForm = this.fb.group({
      idNumber: ['', Validators.required],
    });
  }

  onForgotPassword() {
    this.loading = true;
    this.authService
      .forgotPassword(this.forgotPasswordForm.getRawValue())
      .subscribe((res) => {
        if (res.success) {
          this.loading = false;
          this.authService.setUserId(res.data.id);
          this.router.navigate(['/reset-password']);
        }
      });
  }
}
