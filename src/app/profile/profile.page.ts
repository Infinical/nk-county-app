import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any;
  constructor(
    private authService: AuthService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.user = this.storageService.getData('user-details');
  }

  onLogout() {
    this.authService.doLogout();
  }
}
