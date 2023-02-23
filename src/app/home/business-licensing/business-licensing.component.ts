import { Component, OnInit } from '@angular/core';
import { services } from 'src/app/_utils/home.constants';

@Component({
  selector: 'app-business-licensing',
  templateUrl: './business-licensing.component.html',
  styleUrls: ['./business-licensing.component.scss'],
})
export class BusinessLicensingComponent implements OnInit {
  services = services.businessLicensing;
  constructor() {}

  ngOnInit() {}
}
