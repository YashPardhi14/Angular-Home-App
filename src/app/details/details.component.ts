import { CommonModule } from '@angular/common';
import { Component,  inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
routes:ActivatedRoute =inject(ActivatedRoute);
housingServices=inject(HousingService);
housingLocation:HousingLocation|undefined;



constructor(){
  const housingLocationId=Number(this.routes.snapshot.params['id']);
this.housingLocation=this.housingServices.getHousingLocationById(housingLocationId);
}


}
