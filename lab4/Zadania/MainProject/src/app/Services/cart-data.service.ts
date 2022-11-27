import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  private cart = new BehaviorSubject([
    {
      "id": "0",
      "title": "Bochnia",
      "country": "Poland",
      "dayOut": "2019-08-01",
      "dayIn": "2019-08-01",
      "price": 200,
      "places": 30,
      "currency": "$",
      "description": "Bochnia is a town in southern Poland with a population of 33,000. It is the capital of Bochnia County, Subcarpathian Voivodeship, and is located in the historical region of Lesser Poland. The town is situated in the valley of the Vistula River, 40 km south of Kraków, and 20 km north of Tarnów. Bochnia is the seat of the Roman Catholic Diocese of Bochnia. The town is also the seat of the Bochnia County Museum, which is housed in the former palace of the Counts of Bochnia. The town is also the seat of the Bochnia County Museum, which is housed in the former palace of the Counts of Bochnia.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Widok_układu_urbanistycznego_Bochni_z_wieży_kościoła_farnego.jpg",
      "reviews": [],
      "avgRating": 4.5,
      "counter": 3
  },
  {
      "id": "1",
      "title": "Hawaii Paradise",
      "country": "Hawaii",
      "dayOut": "2021-08-01",
      "dayIn": "2021-08-15",
      "price": 2400,
      "places": 60,
      "currency": "$",
      "description": "Hawaii is a state of the United States of America. It is the only state located in Oceania and the only one composed entirely of islands. It is the northernmost island group in Polynesia, occupying most of an archipelago in the central Pacific Ocean. Hawaii is the 8th-smallest, the 11th-least populous, and the 13th-least densely populated of the 50 United States. The state capital and largest city is Honolulu on the island of Oahu. The date of the state's admission to the Union is August 21, 1959.",
      "image": "https://content.api.news/v3/images/bin/ded3be00f6965dcfa60d91c42563592d?width=1044",
      "reviews": [],
      "avgRating": 5.0,
      "counter": 1
  }
  ]);
  cartData = this.cart.asObservable();

  constructor() { }

  changeCartData(cartData: any) {
    this.cart.next(cartData)
  }
}
