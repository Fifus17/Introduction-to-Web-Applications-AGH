import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];

  newPostForm = new FormGroup({
    title: new FormControl(''),
    post: new FormControl(''),
    author: new FormControl('')
  })

  constructor(private DataService: DataService) { }

  
  ngOnInit(): void {
    this.DataService.getPosts().subscribe(res => this.posts=res)
  }

  sendData(){
    let dataToSend = {
      "userId": 0,
      "id": 0,
      "title": this.newPostForm.get('title')!.value,
      "body": this.newPostForm.get('text')!.value
    }
    this.DataService.sendPost(JSON.stringify(dataToSend)).subscribe(res => this.posts.splice(0, 0, dataToSend))
  }

}
