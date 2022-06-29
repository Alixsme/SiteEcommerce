import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commande } from '../models/Commande.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeServiceService {

  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get<Commande[]>('http://localhost:8030/apiCommande/commandes');
  }


  getByIdCommande(idCommande:number)
  {
  return this.http.get<Commande>('http://localhost:8030/apiCommande/commandes/'+idCommande)
  }

  getByUser(username:string)
  {
  return this.http.get<Commande[]>('http://localhost:8030/apiCommande/commandes/'+username)
  }


  ajouterUneCommande (c:Commande)
  {
    return this.http.post<Commande>('http://localhost:8030/apiCommande/commandes/', c)
  }

  supprimer(idCommande:number)
  {
    return this.http.delete('http://localhost:8030/apiCommande/commandes/'+idCommande)
  }

  

  modifier(c:Commande)
  {
    return this.http.put<Commande>('http://localhost:8030/apiCommande/commandes/', c)
  }
}
