import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthOk } from '../models/AuthOk.model';

@Injectable({
  providedIn: 'root'
})
export class BasiAuthentificationServiceService {

  constructor(private http:HttpClient) { }


    authentification(username:string, password:string)
    {
      /*let basicchaine='Basic '+window.btoa(username+':'+password);

      let headers=new HttpHeaders
      (
        {Authorization:basicchaine}
      )*/

      return this.http.post<any>('http://localhost:8030/authenticate',
       {username, password})
    }


    logout()
    {
      sessionStorage.removeItem('token')
    }

}
