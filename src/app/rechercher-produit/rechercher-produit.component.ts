import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../models/Produit.model';
import { CategorieServiceService } from '../service/categorie-service.service';
import { ProduitServiceService } from '../service/produit-service.service';

@Component({
  selector: 'app-rechercher-produit',
  templateUrl: './rechercher-produit.component.html',
  styleUrls: ['./rechercher-produit.component.css']
})
export class RechercherProduitComponent implements OnInit {

p!:Produit
produits!:Produit[]
selectProduit!:string;

validLogout=true;

  constructor(private serviceProd:ProduitServiceService, private serviceCat:CategorieServiceService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.p=new Produit(0,'','',0)

    this.selectProduit=this.route.snapshot.params['libProduit']
    this.serviceProd.search(this.selectProduit).subscribe
  ( response=>
    {this.produits=response} )
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



