import { Panier } from "./Panier.model";
import { Produit } from "./Produit.model";


export class LignePanier
{
    idLignePanier!:number; 
    quantite!:number; 

    panier!:Panier;

    produit!:Produit; 

    
    constructor(idLignePanier:number, quantite:number)
    {
        this.idLignePanier=idLignePanier; 
        this.quantite=quantite
    }

}