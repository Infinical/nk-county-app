import { Component, OnInit } from '@angular/core';
import { services } from 'src/app/_utils/home.constants';

@Component({
  selector: 'app-health-services',
  templateUrl: './health-services.component.html',
  styleUrls: ['./health-services.component.scss'],
})
export class HealthServicesComponent implements OnInit {
  services = services.healthServices;
  constructor() {}

  ngOnInit() {}
}
