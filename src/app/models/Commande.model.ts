import { LigneCommande } from "./LigneCommande.model";
import { Utilisateur } from "./Utilisateur.model";


export class Commande
{
    idCommande!:number; 
    dateCommande!:Date; 

    user!:Utilisateur; 

    ligneCommandes!:LigneCommande[];
}