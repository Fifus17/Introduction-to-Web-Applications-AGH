import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-card',
  templateUrl: './shopping-cart-card.component.html',
  styleUrls: ['./shopping-cart-card.component.css']
})
export class ShoppingCartCardComponent {

  title:string = "Bochnia";
  country:string = "Poland";
  dateOut:Date = new Date();
  dateIn:Date = new Date();
  maxPlaces:number = 30;
  price:number = 1200;
  currency:string = "$";
  currentPrice:number = 0;
  counter:number = 5;
  imgPath:string = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
  minusButton:any;
  plusButton:any;
  grad:number = 0;
  flag = true;

  constructor() {
    this.minusButton = document.getElementById("minus-button");
    this.plusButton = document.getElementById("plus-button");
    this.maxPlaces = this.counter;
    this.currentPrice = this.counter * this.price;
  }

   addPlace() {
    if(this.counter < this.maxPlaces) {
      this.counter++;
    }
    else {
      this.minusButton.disabled = false;
    }
    this.currentPrice = this.counter * this.price;
  }

  removePlace() {
    if(this.counter > 0) {
    this.counter--;
    }
    else {
      this.minusButton.disabled = true;
    }
    this.currentPrice = this.counter * this.price;
  }
}
