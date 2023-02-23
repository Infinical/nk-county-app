import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.scss'],
})
export class ParkingComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  navigateTo(type: string) {
    if (this.authService.isTokenActive) {
      if (type === 'seasonal') {
        this.router.navigate(['/tabs/home/parking/seasonal']);
      } else if ('reserved') {
        this.router.navigate(['/tabs/home/parking/reserved']);
      } else {
        this.router.navigate(['/login']);
      }
    } else {
      this.router.navigate(['/login']);
    }
  }
}
