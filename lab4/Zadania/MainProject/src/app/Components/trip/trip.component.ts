import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent  {

  title:string;
  country:string;
  dateOut:string
  dateIn:string;
  places:number;
  maxPlaces:number = 0;
  price:number;
  currency:string;
  counter:number = 0;
  description:string;
  imgPath:string;
  avgReview:number = 0;
  minusButton:any;
  plusButton:any;
  grad:number = 0;
  flag:boolean = true;

  @Input('data') data = {'title': "Bochnia", 'country': "Poland", 'dateOut': "09/17/2022", 'dateIn': "09/24/2022", 'places': 30, 'price': 900, 'currency': "$", 'description': "Bochnia is a town in southern Poland with a population of 33,000. It is the capital of Bochnia County, Subcarpathian Voivodeship, and is located in the historical region of Lesser Poland. The town is situated in the valley of the Vistula River, 40 km south of Kraków, and 20 km north of Tarnów. Bochnia is the seat of the Roman Catholic Diocese of Bochnia. The town is also the seat of the Bochnia County Museum, which is housed in the former palace of the Counts of Bochnia. The town is also the seat of the Bochnia County Museum, which is housed in the former palace of the Counts of Bochnia.", 'image': "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bochnia_-_Ratusz.jpg/1200px-Bochnia_-_Ratusz.jpg", 'avgReview': 3.7};

  constructor() {
    this.minusButton = document.getElementById("minus-button");
    this.plusButton = document.getElementById("plus-button");
    this.title = this.data.title;
    this.country = this.data.country;
    this.dateOut = this.data.dateOut;
    this.dateIn = this.data.dateIn;
    this.places = this.data.places;
    this.price = this.data.price;
    this.currency = this.data.currency;
    this.description = this.data.description;
    this.imgPath = this.data.image;
    this.avgReview = this.data.avgReview;
    this.maxPlaces = this.places;
    console.log(this.data);
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

  grade(num:number) {
    if (this.grad == num && !this.flag) {
      this.grad = 0;
      this.flag = true;
    }
    else {
      this.grad = num;
      this.flag = false;
    }
  }

}
