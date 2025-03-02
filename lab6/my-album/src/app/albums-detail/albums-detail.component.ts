import { Component, Input, OnInit } from '@angular/core';
import { AlbumItem, AlbumModel } from '../model/album-model';
import { ActivatedRoute } from '@angular/router';
import { albumsDATA } from '../data/album.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-albums-detail',
  imports: [CommonModule],
  templateUrl: './albums-detail.component.html',
  styleUrl: './albums-detail.component.css'
})
export class AlbumsDetailComponent implements OnInit{
    selectedItem?: AlbumItem;
    selectedAlbum?: AlbumModel;

    constructor (private route : ActivatedRoute){}



    ngOnInit(): void {
      const albumId = Number(this.route.snapshot.paramMap.get('id'));
      const photoId = Number(this.route.snapshot.paramMap.get('photoId'));
    
      console.log("Route Params -> albumId:", albumId, "photoId:", photoId);
    
      this.selectedAlbum = albumsDATA.find(album => album.albumId === albumId);
      console.log("Selected Album:", this.selectedAlbum); 
    
      if (this.selectedAlbum) {
        this.selectedItem = this.selectedAlbum.albumItems.find(s => s.id === Number(photoId));
      }
    
      console.log("Found Photo:", this.selectedItem);
    }
    





}
