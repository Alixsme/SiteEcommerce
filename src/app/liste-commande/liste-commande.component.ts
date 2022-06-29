import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande } from '../models/Commande.model';
import { CommandeServiceService } from '../service/commande-service.service';
import { LigneCommandeServiceService } from '../service/ligne-commande-service.service';

@Component({
  selector: 'app-liste-commande',
  templateUrl: './liste-commande.component.html',
  styleUrls: ['./liste-commande.component.css']
})
export class ListeCommandeComponent implements OnInit {

commande!:Commande;
commandes!:Commande[]

validLogout=true;

  constructor(private route:ActivatedRoute, private router:Router, private service:CommandeServiceService, private serviceLc:LigneCommandeServiceService) { }

  ngOnInit(): void {
    this.afficherToutesCommandes()
  }

  afficherToutesCommandes()
  {
    this.service.getAll().subscribe
    (
      response=>{this.commandes=response}
    )
  }
  
  supprimer(idCommande:number)
  {
    this.service.supprimer(idCommande).subscribe(
      response=>{
        this.afficherToutesCommandes()
      }
    )
  }

  
    retour():void{
      this.router.navigateByUrl('/accueil')
    }
  
    logout()
    {
        sessionStorage.removeItem('token')
        this.router.navigateByUrl('')
        this.validLogout=true
    
    }
}
