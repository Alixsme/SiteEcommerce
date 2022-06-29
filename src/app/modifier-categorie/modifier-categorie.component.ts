import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../models/Categorie.model';
import { Produit } from '../models/Produit.model';
import { CategorieServiceService } from '../service/categorie-service.service';
import { ProduitServiceService } from '../service/produit-service.service';

@Component({
  selector: 'app-modifier-categorie',
  templateUrl: './modifier-categorie.component.html',
  styleUrls: ['./modifier-categorie.component.css']
})
export class ModifierCategorieComponent implements OnInit {

  p!:Produit;
  c!:Categorie; 

  categories!:Categorie[];
  produits!:Produit[];

  selectedValue!:Produit;

  idc!:number;

  constructor(private serviceProd:ProduitServiceService, private serviceCat:CategorieServiceService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.idc=+this.route.snapshot.params['idCategorie']
    this.recupererCategorie(this.idc)
    this.c=new Categorie(0,'','')

    this.serviceProd.getAll().subscribe(response=>this.produits=response)
  }

  recupererCategorie(id:number)
  {
    this.serviceCat.getByIdCate(id).subscribe
    (
      response=>this.c=response
      
    )
  }


  ModifierC()
  {
    this.serviceCat.modifier(this.c).subscribe
    (
      response=>{this.c=response
      this.router.navigateByUrl('afficherCategories')}
    )
  }

  retour():void{
    this.router.navigateByUrl('/accueil')
  }

}
