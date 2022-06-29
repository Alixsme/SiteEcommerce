import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../models/Categorie.model';
import { Produit } from '../models/Produit.model';
import { CategorieServiceService } from '../service/categorie-service.service';
import { ProduitServiceService } from '../service/produit-service.service';
import { UploadFileServiceService } from '../service/upload-file-service.service';

@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.css']
})
export class ModifierProduitComponent implements OnInit {

  p!:Produit;
  c!:Categorie; 

  categories!:Categorie[];
  produits!:Produit[];


  selectedValue!:Categorie;
  idP!:number

  selectedFile!:File; 


  constructor(private gestionUpload:UploadFileServiceService, private service:ProduitServiceService, private route:ActivatedRoute, private router:Router, private serviceCat:CategorieServiceService) { }

  ngOnInit(): void {
    this.selectedValue=new Categorie(0,'','')
    this.p= new Produit(0,'','',0)
    this.idP=+this.route.snapshot.params['idProduit']
    this.recupererProduit(this.idP)

    this.c=new Categorie(0,'','')
    
    this.serviceCat.getAll().subscribe(Response=>this.categories=Response)
    
  }
  recupererProduit(id:number)
  {
    this.service.getByIdProd(id).subscribe
    (
      response=>
      {
        this.p=response
        this.selectedValue=this.p.cate
      }
      
    )
  }

  ModifierP()
  {
   console.log('les informations :')
    console.log(this.selectedValue.idCategorie)
    console.log( this.p.quantite)
    console.log( this.selectedFile.name)
    console.log( this.p.libProduit)
    console.log(this.p.idProduit)
    let formData=new FormData();
    formData.append("file", this.selectedFile);
    formData.append("quantite", this.p.quantite.toString())
    formData.append("idCategorie", this.selectedValue.idCategorie.toString());
    formData.append("libProduit", this.p.libProduit)
    formData.append("idp", this.p.idProduit.toString())
    this.gestionUpload.saveFile2(formData).subscribe(response=>{
      this.router.navigateByUrl('afficherProduits');
    })
  }

  selectedEvent (event:any):void
  {
    this.selectedFile=event.target.files[0];
  }

  retour():void{
    this.router.navigateByUrl('/accueil')
  }
}
