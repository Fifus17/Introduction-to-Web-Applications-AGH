import { Component } from '@angular/core';
import * as tripsData from '/Users/filipdziurdzia/Desktop/Studia/Trzeci-Semestr/WDAI/laboratoria/lab4/Zadania/MainProject/src/app/Data/tripsData.json';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {

  data: any = [];

  constructor() { 
    this.data = tripsData;
    console.log(this.data);
  }

}
