import { Component,inject } from '@angular/core';
import { HomelocationComponent } from '../homelocation/homelocation.component';
import {HousingLocation} from '../housing-location';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomelocationComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList:HousingLocation[] =[
  
  ]
  housingServices:HousingService=inject(HousingService);

  constructor(){
    this.housingLocationList=this.housingServices.getAllHousingLocation();
  }



}
