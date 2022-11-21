import { Component, OnInit } from '@angular/core';
import { CarDetails } from 'src/app/car-details';
// import { NgModule } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
// @NgModule({
//   imports: [
//     // ...
//     NbListModule,
//   ],
// })
export class ListComponent implements OnInit {
  carList: CarDetails[];

  constructor() { }

  ngOnInit(): void {
  }

}
