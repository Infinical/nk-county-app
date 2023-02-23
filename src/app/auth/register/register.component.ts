import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  onRegister() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.authService.setRegistrationInfo(this.registerForm.getRawValue());
      this.router.navigate(['/complete-profile']);
    }, 2000);
  }

  back() {
    this.router.navigate(['/landing'], { replaceUrl: true });
  }
}
