import { CommonModule } from '@angular/common';
import { Component,  inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { ReactiveFormsModule,FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
routes:ActivatedRoute =inject(ActivatedRoute);
housingServices=inject(HousingService);
housingLocation:HousingLocation|undefined;
applyForm=new FormGroup({
  firstName:new FormControl(''),
  lastName:new FormControl(''),
  email:new FormControl('')

});



constructor(){
  const housingLocationId=Number(this.routes.snapshot.params['id']);
this.housingLocation=this.housingServices.getHousingLocationById(housingLocationId);
}

submitApplication(){
  this.housingServices.submitApplication(
    this.applyForm.value.firstName ?? '', //if value of LHS is null or undefined then value of RHS is used...
    this.applyForm.value.lastName ?? '',
    this.applyForm.value.email ?? ''
  )
}

}
