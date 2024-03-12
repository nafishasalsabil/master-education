import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(userInfo:any): Observable<any> {
    return this.http.post( `${environment.API_URL}/login`,
    userInfo);
  }
  register(userInfo:any): Observable<any> {
    return this.http.post( `${environment.API_URL}/register`,
    userInfo);
  }
 
  logout(): Observable<any> {
    return this.http.post( `${environment.API_URL}/logout`,
    {});
  }
 
 
}
