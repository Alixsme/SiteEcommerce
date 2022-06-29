import { LignePanier } from "./LignePanier.model";


export class Panier
{
    idPanier!:number; 

    LignePaniers!:LignePanier[]

    constructor(idPanier:number)
    {
        this.idPanier=idPanier
    }
}