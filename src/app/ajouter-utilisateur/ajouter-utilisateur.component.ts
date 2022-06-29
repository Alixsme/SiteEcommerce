
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from '../models/Utilisateur.model';
import { UtilisateurServiceService } from '../service/utilisateur-service.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  u!:Utilisateur;

  role!:string; 

  idRole!:number

  constructor(private service:UtilisateurServiceService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.u= new Utilisateur(0,'','','','','')
    this.role="";
  }

  inscription()
  {
    console.log(this.idRole)
  this.service.ajouter(this.u, this.idRole).subscribe(
    response=>{
      //redirige ver pas
      this.router.navigateByUrl('');}
  )
}


retour():void
  {
    this.router.navigateByUrl('')
  }

}