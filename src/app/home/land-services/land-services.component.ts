import { Component, OnInit } from '@angular/core';
import { services } from 'src/app/_utils/home.constants';

@Component({
  selector: 'app-land-services',
  templateUrl: './land-services.component.html',
  styleUrls: ['./land-services.component.scss'],
})
export class LandServicesComponent implements OnInit {
  services = services.landServices;
  constructor() {}

  ngOnInit() {}
}
