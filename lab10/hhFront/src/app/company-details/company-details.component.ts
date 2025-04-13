import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../services/main.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-details',
  imports: [CommonModule],
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.css'
})
export class CompanyDetailsComponent implements OnInit {
  vacancies: any[] = [];
  companyName: string = '';
  
  constructor(private route : ActivatedRoute, private service : MainService){

  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getCompanyVacancies(id).subscribe((data) => {
      this.vacancies = data;
      if (data.length > 0) {
        this.companyName = data[0].company.name;
      }
    });
  }
  
  


}
