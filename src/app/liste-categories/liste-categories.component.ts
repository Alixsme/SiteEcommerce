import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../models/Categorie.model';
import { Produit } from '../models/Produit.model';
import { CategorieServiceService } from '../service/categorie-service.service';
import { ProduitServiceService } from '../service/produit-service.service';

@Component({
  selector: 'app-liste-categories',
  templateUrl: './liste-categories.component.html',
  styleUrls: ['./liste-categories.component.css']
})
export class ListeCategoriesComponent implements OnInit {

  @Input() p!:Produit
  @Input() c!:Categorie

  produits!:Produit[]
  categories!:Categorie[]

  id!:number
  validLogout=true;

  selectedValue!:Produit

  constructor(private router:Router, private route:ActivatedRoute, private serviceCat:CategorieServiceService, private serviceProd:ProduitServiceService) { }

  ngOnInit(): void {
    this.recupererCategories()
  }


  supprimer(idCategorie:number)
  {
    this.serviceCat.supprimer(idCategorie).subscribe(
      response=>{
        this.recupererCategories();
      }
    )
  }

  modifier(idCategorie:number)
  {
    this.router.navigateByUrl('modifierCategorie/'+idCategorie)
  }

  produitsAssocies(idCategorie:number)
  {
    this.router.navigateByUrl('ProduitsAssocies/'+idCategorie)
  }





  ajouterCategorie(c:Categorie)
  {
    this.router.navigateByUrl('ajouterCategorie')
  }

  recupererCategories()
  {
    
    this.serviceCat.getAll().subscribe(
      response=>{this.categories=response}
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
