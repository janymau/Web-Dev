import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  TopVacancies: any[5] = [];
  
  constructor(private vacancyService: MainService, private route:Router, private rt : ActivatedRoute) { }


  goToVacancyDetails(id: number) {
    this.route.navigate(['vacancies', id]);
  }
  goToVacancies(){
    this.route.navigate(['vacancies']);
  }
  goToCompanies(){
    this.route.navigate(['companies']);
  }
  goToTopTen(){
    this.route.navigate(['top_ten']);
  }
  ngOnInit() {
    this.vacancyService.getVacancies().subscribe((data) => {
      this.TopVacancies = data;
      console.log(this.TopVacancies);
    });
  }
}
