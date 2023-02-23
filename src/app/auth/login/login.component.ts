/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { ToastService } from 'src/app/_services/toast.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private authService: AuthService,
    private toastrService: ToastService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onLogin() {
    this.loading = true;
    const payload = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value,
      client_id: environment.client_id,
      grant_type: environment.grant_type,
    };
    this.authService.login(payload).subscribe(
      (res) => {
        this.toastrService.presentToast(
          'User logged in successfully',
          'success'
        );
        this.loading = false;
        this.authService.setToken(res);
        this.authService.getUserDetails();
        this.router.navigate(['/tabs/home']);
      },
      (err) => {
        this.loading = false;
        this.toastrService.presentToast(
          'Invalid ID Number or user credentials',
          'error'
        );
      }
    );
  }
}
