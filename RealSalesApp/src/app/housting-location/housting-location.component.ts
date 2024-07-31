import { Component } from '@angular/core';
import { HoustingLocation } from '../housting-location';

@Component({
  selector: 'app-housting-location',
  standalone: true,
  imports: [],
  templateUrl: './housting-location.component.html',
  styleUrl: './housting-location.component.css'
})
export class HoustingLocationComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  housinLocation:HoustingLocation = {
    id:999,
    name:'Test Home',
    city:'Test City',
    state:'ST',
    photo:`${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  }
}
