import { Categorie } from "./Categorie.model";
import { LigneCommande } from "./LigneCommande.model";
import { LignePanier } from "./LignePanier.model";


export class Produit
{
    idProduit!:number; 
    libProduit!:string; 
    img!:string; 
    quantite!:number


    cate!:Categorie

    ligneCommande!:LigneCommande[]; 

    lignePanier!:LignePanier[];


    constructor(idProduit:number, libProduit:string, img:string, quantite:number)
    {
        this.idProduit=idProduit; 
        this.libProduit=libProduit; 
        this.img=img; 
        this.quantite=quantite
    }

}