import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasiAuthentificationServiceService } from '../service/basi-authentification-service.service';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  username!:string; 
  password!:string; 
  errorMessage="Username or password incorrect";
  invalidLogin = false;
  logoutMessage="Logged Out"

  constructor(private router:Router, private basicAuthentificationService:BasiAuthentificationServiceService) { }

  ngOnInit(): void {
  
  }

  login()
  {
    this.basicAuthentificationService.authentification(this.username, this.password).subscribe
    (
      data=>
      {
        sessionStorage.setItem('token', 'Bearer '+data.jwt)
        this.router.navigateByUrl('accueil');
        this.invalidLogin = false;
      },
      error=>
      {
        console.log('spoiler, ça marche pas again'); 
        this.invalidLogin = true;
      }
    )
  }

  createBasicHttpHeader()
  {
    console.log(this.username);
    let basicchaine='Basic '+window.btoa(this.username+':'+this.password);
    return basicchaine;
  }

  inscription()
  {
    this.router.navigateByUrl('Inscription()')
  }

 





}
