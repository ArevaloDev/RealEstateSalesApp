import { Component, Input } from '@angular/core';
import { HoustingLocation } from '../housting-location';

@Component({
  selector: 'app-housting-location',
  standalone: true,
  imports: [],
  templateUrl: './housting-location.component.html',
  styleUrl: './housting-location.component.css'
})
export class HoustingLocationComponent {
  @Input() housingLocation!:HoustingLocation;
  

}
