import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotosComponent } from './photos/photos.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {'path': 'posts', component: PostsComponent},
  {'path': 'photos', component: PhotosComponent},
  {'path': 'photos/:id', component: PhotoComponent},
  {'path': '', component: MainPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
