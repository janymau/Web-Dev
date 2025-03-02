import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
import { AlbumsDetailComponent } from './albums-detail/albums-detail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "albumPhotos/:id", component: AlbumPhotosComponent },
    { path: "albumDetails/:id/photo/:photoId", component: AlbumsDetailComponent }
]
