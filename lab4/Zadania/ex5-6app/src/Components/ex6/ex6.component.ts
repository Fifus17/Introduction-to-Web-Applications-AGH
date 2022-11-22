import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  templateUrl: './ex6.component.html',
  styleUrls: ['./ex6.component.css']
})
export class Ex6Component {
  activeTitle = "";
  activeDescription = "";
  content = [
    {
    title: "The Basics",
    description: "Core Angular basics you need to know"
    },
    {
      title: "Components",
      description: "Components are a core concept for building Angular UIs and apps"
    },
    {
      title: "Events",
      description: "Events are important in Angular"
    }
  ];

  show(title:string, description:string): void {
    this.activeTitle = title;
    this.activeDescription = description;
  }

}
