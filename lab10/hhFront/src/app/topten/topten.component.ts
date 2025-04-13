import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainService } from '../services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topten',
  imports: [CommonModule],
  templateUrl: './topten.component.html',
  styleUrl: './topten.component.css'
})
export class ToptenComponent implements OnInit{
  TopTenVacancies : any[] = []
  constructor(private service : MainService, private route : Router) {}
  
    ngOnInit(): void {
    this.service.getTopTenVacancies().subscribe((data)=>{
      this.TopTenVacancies = data;
    })
  }
  goToVacancyDetails(id: number) {
    this.route.navigate(['vacancies', id]);
  }

}
