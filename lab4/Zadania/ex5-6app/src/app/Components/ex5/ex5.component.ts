import { Component } from '@angular/core';
import * as cars from './cars.json';

@Component({
  selector: 'app-ex5',
  templateUrl: './ex5.component.html',
  styleUrls: ['./ex5.component.css']
})
export class Ex5Component {

  carsJson = cars;
  brands = [];
  inex = 0;

  constructor() {
    console.log('Reading local json files');
    console.log(this.carsJson);
    for (let i = 0; i < this.carsJson.length; i++) {
      if(!(this.brands.includes(this.carsJson[i].brand)))
      {
        this.brands.push(this.carsJson[i].brand);
      }
    }
    console.log(this.brands);
  }

  numberToString(num):string {
    switch(num) {
      case 0: return 'One';
      case 1: return 'Two';
      case 2: return 'Three';
      case 3: return 'Four';
      case 4: return 'Five';
      case 5: return 'Six';
      case 6: return 'Seven';
      case 7: return 'Eight';
      case 8: return 'Nine';
      case 9: return 'Ten';
      default: return 'bagno';
    }
  }
  
}
