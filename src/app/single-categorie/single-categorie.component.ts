import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../models/Categorie.model';
import { Produit } from '../models/Produit.model';
import { CategorieServiceService } from '../service/categorie-service.service';
import { ProduitServiceService } from '../service/produit-service.service';

@Component({
  selector: 'app-single-categorie',
  templateUrl: './single-categorie.component.html',
  styleUrls: ['./single-categorie.component.css']
})
export class SingleCategorieComponent implements OnInit {

    produit!:Produit; 
    categorie!:Categorie;
    @Input() p!:Produit
    @Input() c!:Categorie
  
  categories!:Categorie[]
  produits!:Produit[]
  
  
  idCategorie!:number

  constructor(private router:Router, private route:ActivatedRoute, private serviceCat:CategorieServiceService, private serviceProd:ProduitServiceService) { }

  ngOnInit(): void {
    const id=this.route.snapshot.params['idCategorie']
    this.serviceCat.getByIdCate(id).subscribe
    (
      response=>this.categorie=response
    )
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

  retour():void
  {
    this.router.navigateByUrl('/accueil')
  }

}
