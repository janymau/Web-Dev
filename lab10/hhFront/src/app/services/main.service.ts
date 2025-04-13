import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private BASE_URL = 'http://localhost:8000/api';

  constructor(private http : HttpClient) { }

  getCompanies():Observable<any>{
    return this.http.get(`${this.BASE_URL}/companies/`);
  }
  getVacancies():Observable<any>{
    return this.http.get(`${this.BASE_URL}/vacancies/`);
  }
  getVacancyDetail(id:Number):Observable<any>{
    return this.http.get(`${this.BASE_URL}/vacancies/${id}`)
  }
  getCompanyVacancies(id : Number):Observable<any>{
    return this.http.get(`${this.BASE_URL}/companies/${id}/vacancies`);
  }
  getTopTenVacancies():Observable<any>{
    return this.http.get(`${this.BASE_URL}/vacancies/top_ten/`)
  }

}
