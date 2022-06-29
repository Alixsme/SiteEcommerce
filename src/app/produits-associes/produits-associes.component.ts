import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../models/Categorie.model';
import { Produit } from '../models/Produit.model';
import { CategorieServiceService } from '../service/categorie-service.service';
import { ProduitServiceService } from '../service/produit-service.service';

@Component({
  selector: 'app-produits-associes',
  templateUrl: './produits-associes.component.html',
  styleUrls: ['./produits-associes.component.css']
})
export class ProduitsAssociesComponent implements OnInit {

  @Input() p!:Produit
  @Input() c!:Categorie

categories!:Categorie[]
produits!:Produit[]


idCategorie!:number

  constructor(private router:Router, private route:ActivatedRoute, private serviceCat:CategorieServiceService, private serviceProd:ProduitServiceService) { }

  ngOnInit(): void {
    this.ProduitsAssocies(this.idCategorie)
  }


  ProduitsAssocies(idCategorie:number)
  {
    const id=this.route.snapshot.params['idCategorie']
  
    this.serviceProd.getByIdCat(id).subscribe
    (
      response=>{this.produits=response}
      //response=>{this.recupProduits(this.idCategorie)}
      
    )
  }

 
  recupProduits(idCategorie:number)
  {
    this.serviceProd.getByIdCat(this.idCategorie).subscribe
    (
      response=>{this.produits=response}
      )
  }

    retour():void{
      this.router.navigateByUrl('/accueil')
    }

}
