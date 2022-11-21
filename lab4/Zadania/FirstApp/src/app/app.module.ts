import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './Components/square/square.component';
import { BoardComponent } from './Components/board/board.component';
import { NbButtonModule } from '@nebular/theme';
import { NbListModule } from '@nebular/theme';
import { ActorInfoComponent } from './Components/actor-info/actor-info.component';
import { ListComponent } from './Components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
    ActorInfoComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbButtonModule,
    NbListModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
