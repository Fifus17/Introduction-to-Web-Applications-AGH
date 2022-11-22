import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ex5-6app';
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
