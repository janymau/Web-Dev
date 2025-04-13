import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  imports: [CommonModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit{
  Companies : any[] = []
  constructor(private service: MainService, private route: Router){}
  
  
  goToCompanyDetail(id : Number){
    this.route.navigate(['companies',id]);
  }
  ngOnInit(): void {
    this.service.getCompanies().subscribe((data)=>
    {
      this.Companies = data;
      console.log(this.Companies)
    }
  )
  
  }

}
