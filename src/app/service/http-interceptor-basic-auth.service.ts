import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
   // let username='username1'
   // let password='1234'
   // let basicchaine='Basic '+window.btoa(username+':'+password)

    let basicchaine=sessionStorage.getItem('token');
if(basicchaine)
    {req=req.clone
    (
      {setHeaders:{Authorization:basicchaine}}
    )
    }
    return next.handle(req)
  }

}
