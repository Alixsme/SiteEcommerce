import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande } from '../models/Commande.model';
import { LignePanier } from '../models/LignePanier.model';
import { Panier } from '../models/Panier.model';
import { Produit } from '../models/Produit.model';
import { LignePanierServiceService } from '../service/ligne-panier-service.service';
import { PanierServiceService } from '../service/panier-service.service';

@Component({
  selector: 'app-liste-panier',
  templateUrl: './liste-panier.component.html',
  styleUrls: ['./liste-panier.component.css']
})
export class ListePanierComponent implements OnInit {

produit!:Produit
produits!:Produit []

lp!:LignePanier
lignePaniers!:LignePanier[]

panier!:Panier; 
paniers!:Panier[]

commande!:Commande

validLogout=true


  constructor(private route:ActivatedRoute, private router:Router, private serviceLp:LignePanierServiceService,
      private servicePanier:PanierServiceService) { }



  ngOnInit(): void {
    const id=this.route.snapshot.params['idPanier']
    this.servicePanier.getById(id).subscribe
    (response=> this.panier=response)
  }

  afficherPanier()
  {

  }


  ajouterUnPanier()
  {

  }


  modifier(idPanier:number)
  {
    
    this.router.navigateByUrl('modifierLignePanier/'+idPanier)
  }

  supprimer()
  {

  }

  commander()
  {

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
