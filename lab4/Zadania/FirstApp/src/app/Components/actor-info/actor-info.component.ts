import { Component, Input, OnInit } from '@angular/core';
import { StringLiteralLike } from 'typescript';

@Component({
  selector: 'app-actor-info',
  templateUrl: './actor-info.component.html',
  styleUrls: ['./actor-info.component.css']
})
export class ActorInfoComponent implements OnInit {

  name: string = "";
  surname: string = "";
  movie: String = "";

  constructor() { }

  ngOnInit(): void {
  }

  addActor(name, surname, movie): void {
    this.name = name;
    this.surname = surname;
    this.movie = movie;
  }

}
