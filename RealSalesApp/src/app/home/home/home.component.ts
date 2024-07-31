import { Component } from '@angular/core';
import { HoustingLocationComponent } from "../../housting-location/housting-location.component";
import { HoustingLocation } from '../../housting-location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HoustingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  housingLocation:HoustingLocation = {
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
