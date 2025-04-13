import { Component } from '@angular/core';
import { MainService } from '../services/main.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacancy-details',
  imports: [CommonModule],
  templateUrl: './vacancy-details.component.html',
  styleUrl: './vacancy-details.component.css'
})
export class VacancyDetailsComponent {
  vacancyDetails: any = {};
  constructor(private service : MainService, private route : ActivatedRoute) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id')); 
    this.service.getVacancyDetail(id).subscribe((data) => {
      this.vacancyDetails = data;
      console.log(this.vacancyDetails);
    });
   }

}
