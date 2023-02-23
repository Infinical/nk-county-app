import { Component, OnInit } from '@angular/core';
import { services } from 'src/app/_utils/home.constants';

@Component({
  selector: 'app-property-management',
  templateUrl: './property-management.component.html',
  styleUrls: ['./property-management.component.scss'],
})
export class PropertyManagementComponent implements OnInit {
  services = services.propertyServices;
  constructor() {}

  ngOnInit() {}
}
