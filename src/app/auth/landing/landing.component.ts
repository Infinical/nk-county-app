import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  @ViewChild('mySlider') slider: IonSlides;
  currentIndex = 3;
  slideOpts = {
    loop: false,
  };
  loginForm: FormGroup;
  loading = false;
  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {}

  async onSlideChanged() {
    this.currentIndex = await this.slider.getActiveIndex();
    if (this.currentIndex === 3) {
      this.slider.lockSwipes(true);
    }
  }

  async skip() {
    this.slider.slideTo(3, 1000).then(() => {
      this.slider.lockSwipeToPrev(true);
    });
  }

  async next() {
    this.slider.slideNext();
  }

  selectAction(action: string) {
    switch (action) {
      case 'login':
        this.router.navigate(['/login']);
        break;
      case 'register':
        this.router.navigate(['/register']);
        break;
      case 'explore':
        this.router.navigate(['/tabs/home'], { replaceUrl: true });
        break;
      default:
        break;
    }
  }
}
