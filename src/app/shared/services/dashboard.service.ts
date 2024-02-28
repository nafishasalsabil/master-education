import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) { }

  getServices(): Observable<any> {
    return this.http.get('/assets/jsons/services.json');
  }
  getAboutUs(): Observable<any> {
    return this.http.get('/assets/jsons/about-us.json');
  }
  getCarousel(): Observable<any> {
    return this.http.get('/assets/jsons/carousel.json');
  }
}
