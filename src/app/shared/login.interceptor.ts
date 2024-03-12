import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    // this.cookieService.set('AuthToken', token);
    const authReq = req.clone({
      headers: new HttpHeaders({
        AccessControlAllowHeaders: 'Content-Type,Authorization',
        AccessControlAllowOrigin: '',
        Authorization: `Bearer ${token}`
      }),
      withCredentials: true,
    });
    return next.handle(authReq);
  }
}