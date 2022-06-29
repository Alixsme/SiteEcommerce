import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../models/Categorie.model';
import { Produit } from '../models/Produit.model';
import { CategorieServiceService } from '../service/categorie-service.service';
import { ProduitServiceService } from '../service/produit-service.service';
import { UploadFileServiceService } from '../service/upload-file-service.service';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {

  p!:Produit;
  c!:Categorie;

  produits!:Produit[]
  categories!:Categorie[]

  selectedValue!:Categorie;

  idC!:number;

  selectedFile!:File; 




  constructor(private gestionUpload:UploadFileServiceService, private serviceProd:ProduitServiceService, private serviceCat:CategorieServiceService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.c=new Categorie(0,'','')
    this.serviceCat.getAll().subscribe(Response=>this.categories=Response)
    
    this.p= new Produit(0,'','',0)
  }


  //methode du formulaire
  
  AjouterP()
  {
    console.log(this.selectedValue.idCategorie)
    let formData=new FormData();
    formData.append("file", this.selectedFile);
    formData.append("quantite", this.p.quantite.toString())
    formData.append("idCategorie", this.selectedValue.idCategorie.toString());
    formData.append("libProduit", this.p.libProduit)
    this.gestionUpload.saveFile(formData).subscribe()
   

   
    this.selectedValue.nomCategorie=this.c.nomCategorie
      this.serviceCat.modifier(this.selectedValue).subscribe(
        response=>{
          this.router.navigateByUrl('afficherProduits');
        }
      )
  
  }


  selectedEvent (event:any):void
  {
    this.selectedFile=event.target.files[0];
  }

  uploadFile():void
  {
    let formData=new FormData();
    formData.append("file", this.selectedFile);
    formData.append("quantite", this.p.quantite.toString())
    formData.append("idCategorie", this.p.cate.idCategorie.toString());
    formData.append("libProduit", this.p.libProduit)
    this.gestionUpload.saveFile(formData).subscribe()
    
  }


  
  // BOUTON RETOUR ACCUEIL
  
    retour():void
  {
    this.router.navigateByUrl('/accueil')
  }

}
