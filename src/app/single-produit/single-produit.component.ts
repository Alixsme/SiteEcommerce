import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../models/Categorie.model';
import { Produit } from '../models/Produit.model';
import { CategorieServiceService } from '../service/categorie-service.service';
import { ProduitServiceService } from '../service/produit-service.service';

@Component({
  selector: 'app-single-produit',
  templateUrl: './single-produit.component.html',
  styleUrls: ['./single-produit.component.css']
})
export class SingleProduitComponent implements OnInit {

  produit!:Produit;
  categorie!:Categorie

  constructor(private router:Router, private service:ProduitServiceService, private route:ActivatedRoute, private serviceCat:CategorieServiceService) { }

  ngOnInit(): void {
    const id=this.route.snapshot.params['idProduit']
    this.service.getByIdProd(id).subscribe(
      response=>this.produit=response
    )
  }

  
  retour():void
  {
    this.router.navigateByUrl('/accueil')
  }
}
