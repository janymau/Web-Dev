import { Component, Output } from '@angular/core';
import { AlbumModel } from '../model/album-model';
import { CommonModule } from '@angular/common';
import { AlbumsDetailComponent } from '../albums-detail/albums-detail.component';
import { albumsDATA } from '../data/album.data';
import { Route, Router } from '@angular/router';
import { AlbumPhotosComponent } from '../album-photos/album-photos.component';

@Component({
  selector: 'app-albums',
  imports: [CommonModule, AlbumPhotosComponent],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  albums: AlbumModel[] = albumsDATA;
  selectedID?: number;

  constructor(private route: Router) {}
  goToAlbumPhotos(albumId: number) {   
    this.route.navigate(["albumPhotos", albumId]);
    this.selectedID = albumId; }


}
