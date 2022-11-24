import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TripsComponent } from './Components/trips/trips.component';
import { TripComponent } from './Components/trip/trip.component';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { ShoppingCartCardComponent } from './Components/shopping-cart-card/shopping-cart-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TripsComponent,
    TripComponent,
    NavigationBarComponent,
    ShoppingCartComponent,
    ShoppingCartCardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
