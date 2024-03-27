import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) { }

  getServices(): Observable<any> {
    return this.http.get(`${environment.API_URL}/services`);
  }
  getAboutUs(): Observable<any> {
    return this.http.get(`${environment.API_URL}/about-us`);
  }
  getCarousel(): Observable<any> {
    return this.http.get(`${environment.API_URL}/carousel`);
  }
  getCountries(): Observable<any> {
    return this.http.get('/assets/jsons/countries.json');
  }
}
