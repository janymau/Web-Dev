import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { VacancyDetailsComponent } from './vacancy-details/vacancy-details.component';
import { CompanyComponent } from './company/company.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { ToptenComponent } from './topten/topten.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'vacancies', component:VacancyComponent},
    {path:'vacancies/:id', component:VacancyDetailsComponent},
    {path:'companies', component:CompanyComponent},
    {path:'companies/:id', component:CompanyDetailsComponent},
    {path:'companies/:id/vacancies', component:CompanyDetailsComponent},
    {path:'top_ten', component:ToptenComponent}
    
];
