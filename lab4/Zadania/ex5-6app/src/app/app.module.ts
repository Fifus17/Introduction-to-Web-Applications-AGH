import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ex5Component } from './Components/ex5/ex5.component';
import { Ex6Component } from './Components/ex6/ex6.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex6Component,
    Ex5Component
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
