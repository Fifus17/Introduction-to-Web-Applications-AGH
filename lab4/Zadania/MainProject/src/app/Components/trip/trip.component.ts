import { Component } from '@angular/core';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent {

  title:string = "Bochnia";
  country:string = "Poland";
  dateOut:Date = new Date();
  dateIn:Date = new Date();
  places:number = 30;
  maxPlaces:number = 30;
  price:number = 1200;
  currency:string = "$";
  counter:number = 0;
  description:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam magnam dolorum soluta ratione voluptatem officiis vitae delectus quasi fugiat sit accusamus, eligendi ullam maiores, assumenda similique impedit? Cupiditate, sequi minus!";
  imgPath:string = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
  minusButton:any;
  plusButton:any;
  grad:number = 0;
  flag = true;

  constructor() {
    this.minusButton = document.getElementById("minus-button");
    this.plusButton = document.getElementById("plus-button");
    this.maxPlaces = this.places;
  }

  addPlace() {
    this.places--;
    if(this.counter < this.maxPlaces) {
      this.counter++;
    }
    else {
      this.minusButton.disabled = false;
    }
  }

  removePlace() {
    this.places++;
    if(this.counter > 0) {
    this.counter--;
    }
    else {
      this.minusButton.disabled = true;
    }
  }

  // grade(num:number) {
  //   this.grad = num;
  // }

}
