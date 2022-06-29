import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LigneCommande } from '../models/LigneCommande.model';

@Injectable({
  providedIn: 'root'
})
export class LigneCommandeServiceService {

  constructor(private http:HttpClient) { }

  
  getAll()
  {
    return this.http.get<LigneCommande[]>('http://localhost:8030/apiLigneCommande/ligneCommandes');
  }

  getById(idLigneCommande:number)
  {
  return this.http.get<LigneCommande>('http://localhost:8030/apiLigneCommande/ligneCommandes/'+idLigneCommande)
  }

  ajouter (lc:LigneCommande)
  {
    return this.http.post<LigneCommande>('http://localhost:8030/apiLigneCommande/ligneCommandes/', lc)
  }



  supprimerPanier(idLigneCommande:number)
  {
    return this.http.delete('http://localhost:8030/apiLigneCommande/ligneCommandes/'+idLigneCommande)
  }

  

  modifier(lc:LigneCommande)
  {
    return this.http.put<LigneCommande>('http://localhost:8030/apiLigneCommande/ligneCommandes/', lc)
  }

}
