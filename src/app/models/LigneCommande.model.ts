import { Commande } from "./Commande.model";
import { Produit } from "./Produit.model";


export class LigneCommande
{
    idLigneCommande!:number; 

    quantite!:number
    
    commande!:Commande; 

    produit!:Produit; 
    
    constructor(idLigneCommande:number, quantite:number)
    {
        this.idLigneCommande=idLigneCommande; 
        this.quantite=quantite
    }

}