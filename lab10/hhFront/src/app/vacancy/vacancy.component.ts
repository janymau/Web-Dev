import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-vacancy',
  imports: [CommonModule],
  templateUrl: './vacancy.component.html',
  styleUrl: './vacancy.component.css'
})
export class VacancyComponent implements OnInit{
  Vacancies : any[] = []

  constructor(private service : MainService, private route : Router) {
    
  }
  ngOnInit(): void {
    this.service.getVacancies().subscribe((data)=>{
      this.Vacancies = data;
      console.log(this.Vacancies);
    })  }

    goToVacancyDetails(id: number) {
      this.route.navigate(['vacancies', id]);
    }
}
