import { Component } from '@angular/core';
import { HoustingLocationComponent } from "../../housting-location/housting-location.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HoustingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
