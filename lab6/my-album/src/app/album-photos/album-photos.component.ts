import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumModel } from '../model/album-model';
import { albumsDATA } from '../data/album.data';
import { CommonModule } from '@angular/common';
import { AlbumsDetailComponent } from '../albums-detail/albums-detail.component';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {
  selectedAlbum?: AlbumModel;
  selectedPhotoId?: number;
  albumid?:number;
  constructor(private route: ActivatedRoute, private router: Router) {}



  goToPhotoDetails(photoId: number){
    this.router.navigate([`/albumDetails`, this.albumid, `photo`, photoId]);
  }

  ngOnInit(): void {
    
    const albumId = Number(this.route.snapshot.paramMap.get('id')); 
    this.albumid = albumId;
    this.selectedAlbum = albumsDATA.find(album => album.albumId === albumId);
    console.log("Selected Album:", this.selectedAlbum);
  
  }
  
}
