import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';
import { ToastService } from 'src/app/_services/toast.service';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.scss'],
})
export class ProfileInformationComponent implements OnInit {
  profileInforForm: FormGroup;
  loading = false;
  userDetails: any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService,
    private toastService: ToastService,
    private router: Router
  ) {
    // authService.userDetails$.subscribe((res) => {
    //   this.userDetails = res;
    //   console.log(this.userDetails);
    // });
    this.userDetails = this.storageService.getData('user-details');
    console.log(this.userDetails);
    console.log(this.userDetails?.attributes?.secondaryPhoneNumber);
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.profileInforForm = this.fb.group({
      firstName: [{ value: this.userDetails?.firstName, disabled: true }],
      lastName: [{ value: this.userDetails?.lastName, disabled: true }],
      email: [{ value: this.userDetails?.email, disabled: true }],
      idNumber: [
        { value: this.userDetails?.attributes.idNumber[0], disabled: true },
      ],
      kraPin: [
        { value: this.userDetails?.attributes.kraPin[0], disabled: true },
      ],
      secondaryPhoneNumber: [
        this.userDetails?.attributes?.secondaryPhoneNumber === undefined
          ? ''
          : this.userDetails?.attributes?.secondaryPhoneNumber[0],
      ],
      secondaryEmail: [
        this.userDetails?.attributes?.secondaryEmail === undefined
          ? ''
          : this.userDetails?.attributes?.secondaryEmail[0],
      ],
      phoneNumber: [
        { value: this.userDetails?.attributes.phoneNumber[0], disabled: true },
      ],
    });
  }

  onUpdateProfile() {
    this.loading = true;
    const payload = {
      attributes: {
        idNumber: this.profileInforForm.controls.idNumber.value,
        kraPin: this.profileInforForm.controls.kraPin.value,
        phoneNumber: this.profileInforForm.controls.phoneNumber.value,
        idType: this.userDetails.attributes.idType[0],
        profilePicture: this.userDetails.attributes.profilePicture[0],
        secondaryPhoneNumber:
          this.profileInforForm.controls.secondaryPhoneNumber.value,
        secondaryEmail: this.profileInforForm.controls.secondaryEmail.value,
      },
    };
    this.authService.updateCustomer(payload).subscribe(
      (res) => {
        if (res.success) {
          this.loading = false;
          this.authService.setUserDetails(res.data);
          this.toastService.presentToast(res.message, 'success');
        }
      },
      (err) => {
        this.loading = false;
        this.toastService.presentToast(err.message, 'error');
      }
    );
  }

  back() {
    this.router.navigate(['/tabs/profile'], { replaceUrl: true });
  }
}
