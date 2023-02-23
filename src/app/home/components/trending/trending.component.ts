import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss'],
})
export class TrendingComponent implements OnInit {
  slideOpts = {
    slidesPerView: 1.1,
    spaceBetween: -40,
    // centeredSlides: true,
  };
  constructor() {}

  ngOnInit() {}
}
