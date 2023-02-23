import { Component, OnInit } from '@angular/core';
interface ParkingZone {
  viewValue: string;
  value: string;
}

interface VehicleType {
  viewValue: string;
  value: string;
}
@Component({
  selector: 'app-offstreet',
  templateUrl: './offstreet.component.html',
  styleUrls: ['./offstreet.component.scss'],
})
export class OffstreetComponent implements OnInit {
  zones: ParkingZone[] = [
    { value: 'steak-0', viewValue: 'CBD' },
    { value: 'pizza-1', viewValue: 'Industrial Area' },
    { value: 'tacos-2', viewValue: 'Westlands' },
    { value: 'tacos-2', viewValue: 'Eastleigh' },
    { value: 'tacos-2', viewValue: 'Ngara' },
    { value: 'tacos-2', viewValue: 'Yaya' },
    { value: 'tacos-2', viewValue: 'Uthiru' },
    { value: 'tacos-2', viewValue: 'Ziwani' },
    { value: 'tacos-2', viewValue: 'Ngong Road' },
    { value: 'tacos-2', viewValue: 'Buruburu' },
    { value: 'tacos-2', viewValue: 'Githurai' },
    { value: 'tacos-2', viewValue: 'Highridge' },
    { value: 'tacos-2', viewValue: 'Lavington' },
    { value: 'tacos-2', viewValue: 'Milimani' },
  ];

  vehicleTypes: VehicleType[] = [
    { value: 'steak-0', viewValue: 'Private' },
    { value: 'pizza-1', viewValue: 'Pickup' },
    { value: 'tacos-2', viewValue: 'Canter' },
    { value: 'tacos-2', viewValue: 'Lorry' },
    { value: 'tacos-2', viewValue: 'Minibus' },
    { value: 'tacos-2', viewValue: 'Bus' },
    { value: 'tacos-2', viewValue: 'Trailer' },
  ];
  constructor() {}

  ngOnInit() {}
}
