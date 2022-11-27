import { Component } from '@angular/core';
import { CartDataService } from '../../Services/cart-data.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  
  itemsCounter: number = 0;
  currentData: any;

  constructor(private data: CartDataService) { 
    this.data.cartData.subscribe(currentData => this.currentData = currentData) 
    console.log(this.currentData);
    for (let i = 0; i < this.currentData.length; i++) {
      this.itemsCounter += this.currentData[i].counter;
    }
    console.log(this.itemsCounter);
  }
  

}
