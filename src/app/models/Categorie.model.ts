import { Produit } from "./Produit.model";

export class Categorie
{
    idCategorie!:number; 
    nomCategorie!:string; 
    description!:string; 

    produits!:Produit[]; //mettre sous forme de liste de prouits

    constructor(idCategorie:number, nomCategorie:string, description:string)
    {
        this.idCategorie=idCategorie; 
        this.nomCategorie=nomCategorie; 
        this.description=description;
    }
}