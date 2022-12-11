import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { DataService } from '../data.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private singlePhotoService: DataService) { }
  private subscription: Subscription | undefined

  id: number = -1
  photoUrl: string = ""
  ngOnInit(): void {
     this.subscription = this.route.params.subscribe(params => {
          this.id = params['id']
        })
      this.singlePhotoService.getPhoto(this.id).subscribe((res: { url: string; }) => this.photoUrl=res.url)
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe()
  }

}
