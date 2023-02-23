import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { services } from 'src/app/_utils/home.constants';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  services = services.homeMenuItems;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  navigateToService(route) {
    console.log(route);
    if (route === '/tabs/home/parking' || route === '/tabs/home/market-cess') {
      this.router.navigate([route]);
    } else {
      if (this.authService.isTokenActive) {
        this.router.navigate([route]);
      } else {
        this.router.navigate(['/login']);
      }
    }
  }
}
