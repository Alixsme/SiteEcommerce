import { Utilisateur } from "./Utilisateur.model";


export class Role 
{
    idRole!:number; 
    nom!:string; 
    librole!:string; 
    description!:string; 

    utilisateurs!:Utilisateur[]

    constructor(idRole:number, nom:string, librole:string, description:string)
    {
        this.idRole=idRole; 
        this.nom=nom; 
        this.librole=librole; 
        this.description=description
    }
}