import { Component, NgModule } from '@angular/core';
import { NbListModule, NbListItemComponent } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// @NgModule ({
//   imports: [
//     NbListModule,
//   ],
// })

export class AppComponent {
  title = 'FirstApp';
}
