import { Commande } from "./Commande.model";
import { Role } from "./Role.model";


export class Utilisateur
{
    id!:number; 
    nom!:string; 
    prenom!:string; 
    dateNaissance!:string; 
    username!:string; 
    password!:string

    mail!:string

    role!:Role; 

    commande!:Commande[]

constructor(id:number, nom:string, prenom:string, dateNaissance:string, username:string, password:string)
{
    this.id=id; 
    this.nom=nom; 
    this.prenom=prenom; 
    this.dateNaissance=dateNaissance; 
    this.username=username; 
    this.password=password
}

}