import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../models/Produit.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { ProduitServiceService } from '../service/produit-service.service';
import { UtilisateurServiceService } from '../service/utilisateur-service.service';

@Component({
  selector: 'app-page-principale',
  templateUrl: './page-principale.component.html',
  styleUrls: ['./page-principale.component.css']
})
export class PagePrincipaleComponent implements OnInit {

  validLogout=true;

  u!:Utilisateur;

  selectProduit!:string

  produits!:Produit[]

  

  constructor(private router:Router, private service:UtilisateurServiceService, private route:ActivatedRoute, private serviceProd:ProduitServiceService) { }

  ngOnInit(): void {
  }


  afficherCategories()
  {
    this.router.navigateByUrl('afficherCategories()')
  }

  afficherProduits()
  {
    this.router.navigateByUrl('afficherProduits()')
  }

  search()
  {
   
    this.router.navigateByUrl('rechercher/'+this.selectProduit)
    
  }



  afficherPanier()
  {
    this.router.navigateByUrl('afficherPanier()')
  }

  afficherCommandes()
  {
    this.router.navigateByUrl('afficherCommandes()')
  }


  logout()
  {
      sessionStorage.removeItem('token')
      this.router.navigateByUrl('')
      this.validLogout=true
  
  }
  
  supprimerCompte(id:number)
  {
    this.service.supprimer(id).subscribe
    (
      response=> this.router.navigateByUrl('/accueil')
    )
  }



}
