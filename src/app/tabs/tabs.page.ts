import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  newMessage: any;
  newActivities: any;
  constructor(private router: Router) {
    // this.goToPictures();
  }

  logout() {
    this.router.navigate(['/login'], { replaceUrl: true });
  }

  goToPictures() {
    this.router.navigate(['/tabs/home']);
  }
}
