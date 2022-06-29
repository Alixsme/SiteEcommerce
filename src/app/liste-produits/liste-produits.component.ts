import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../models/Categorie.model';
import { LignePanier } from '../models/LignePanier.model';
import { Produit } from '../models/Produit.model';
import { LignePanierServiceService } from '../service/ligne-panier-service.service';
import { PanierServiceService } from '../service/panier-service.service';
import { ProduitServiceService } from '../service/produit-service.service';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {

  produits!:Produit[]

  @Input() p!:Produit
  @Input() c!:Categorie

  validLogout=true;

  lp!:LignePanier

  constructor(private servicelp:LignePanierServiceService, private service:ProduitServiceService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.recupererProduits()
    this.lp=new LignePanier(0,0)
  }

  recupererProduits()
  {
    this.service.getAll().subscribe(response=>{this.produits=response})
  }


  supprimer(idProduit:number)
  {
    this.service.supprimer(idProduit).subscribe(
      response=>{
        this.recupererProduits();
      }
    )
  }

  modifier(idProduit:number)
  {
    this.router.navigateByUrl('modifierProduit/'+idProduit);
  }


  ajouterProduit(p:Produit)
  {
    this.router.navigateByUrl('ajouterProduit')
  }

  ajouterAuPanier(idProduit:number)
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
