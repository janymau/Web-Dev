import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumsComponent } from '../albums/albums.component';

@Component({
  selector: 'app-home',
  imports: [AlbumsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private route: Router) {}
  goToAbout(){
    this.route.navigate(["about"]);
  }
}
