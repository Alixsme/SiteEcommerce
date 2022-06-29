import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../models/Categorie.model';
import { Produit } from '../models/Produit.model';
import { CategorieServiceService } from '../service/categorie-service.service';
import { ProduitServiceService } from '../service/produit-service.service';

@Component({
  selector: 'app-ajouter-categorie',
  templateUrl: './ajouter-categorie.component.html',
  styleUrls: ['./ajouter-categorie.component.css']
})
export class AjouterCategorieComponent implements OnInit {

  p!:Produit;
  c!:Categorie;

  produits!:Produit[]
  categories!:Categorie[]

  constructor(private router:Router, private route:ActivatedRoute, private serviceProd:ProduitServiceService, private serviceCat:CategorieServiceService) { }

  ngOnInit(): void {
    this.c=new Categorie(0,'','')
  }

AjouterC()
{
  this.serviceCat.ajouter(this.c).subscribe(
    response=>{
      this.router.navigateByUrl('afficherCategories');}
  )
}

  retour():void
  {
    this.router.navigateByUrl('/accueil')
  }
}
