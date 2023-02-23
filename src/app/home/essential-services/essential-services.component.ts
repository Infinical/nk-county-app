import { Component, OnInit } from '@angular/core';
import { services } from 'src/app/_utils/home.constants';

@Component({
  selector: 'app-essential-services',
  templateUrl: './essential-services.component.html',
  styleUrls: ['./essential-services.component.scss'],
})
export class EssentialServicesComponent implements OnInit {
  services = services.essentialServices;
  constructor() {}

  ngOnInit() {}
}
