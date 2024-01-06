import { Component,Input } from '@angular/core';
import {HousingLocation} from '../housing-location';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-homelocation',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './homelocation.component.html',
  styleUrl: './homelocation.component.css'
})
export class HomelocationComponent {
  @Input() housingLocation!:HousingLocation
  

}
