import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LignePanier } from '../models/LignePanier.model';
import { Panier } from '../models/Panier.model';
import { Produit } from '../models/Produit.model';
import { PanierServiceService } from '../service/panier-service.service';
import { LignePanierServiceService } from '../service/ligne-panier-service.service';

@Component({
  selector: 'app-modifier-panier',
  templateUrl: './modifier-panier.component.html',
  styleUrls: ['./modifier-panier.component.css']
})
export class ModifierPanierComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router, private servieP:PanierServiceService, private serviceLP:LignePanierServiceService) { }

  lignePanier!:LignePanier
  lignePaniers!:LignePanier[]

  panier!:Panier
  paniers!:Panier[]

  produit!:Produit
  produits!:Produit[]

  ngOnInit(): void {
    this.lignePaniers=[]
  }

  Modif()
  {

  }
  
  supprimer(idLignePanier:number)
  {

  }
}
