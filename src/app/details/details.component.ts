import { CommonModule } from '@angular/common';
import { Component,  inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
inject
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
routes:ActivatedRoute =inject(ActivatedRoute);
housingLocationId=0;

constructor(){
  this.housingLocationId=Number(this.routes.snapshot.params['id']);
}


}
