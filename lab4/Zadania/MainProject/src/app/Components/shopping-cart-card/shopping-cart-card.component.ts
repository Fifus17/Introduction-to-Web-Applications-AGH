import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-card',
  templateUrl: './shopping-cart-card.component.html',
  styleUrls: ['./shopping-cart-card.component.css']
})
export class ShoppingCartCardComponent implements OnInit {

  @Input('data') data: any;

  maxPlaces:number = 30;
  currentPrice:number = 0;
  counter:number = 5;
  minusButton:any;
  plusButton:any;
  grad:number = 0;
  flag = true;

  constructor() {
    this.minusButton = document.getElementById("minus-button");
    this.plusButton = document.getElementById("plus-button");
  }

  ngOnInit() {
    this.counter = this.data.counter;
    this.maxPlaces = this.counter;
    this.currentPrice = this.data.counter * this.data.price;
  }

   addPlace() {
    if(this.counter < this.maxPlaces) {
      this.counter++;
    }
    else {
      this.minusButton.disabled = false;
    }
    this.currentPrice = this.counter * this.data.price;
  }

  removePlace() {
    if(this.counter > 0) {
    this.counter--;
    }
    else {
      this.minusButton.disabled = true;
    }
    this.currentPrice = this.counter * this.data.price;
  }
}
