import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LignePanier } from '../models/LignePanier.model';

@Injectable({
  providedIn: 'root'
})
export class LignePanierServiceService {

  constructor(private http:HttpClient) { }


  getAll()
  {
    return this.http.get<LignePanier[]>('http://localhost:8030/apiLignePanier/lignesPaniers');
  }

  getById(idLignePanier:number)
  {
  return this.http.get<LignePanier>('http://localhost:8030/apiLignePanier/lignesPaniers/'+idLignePanier)
  }

  ajouter (lp:LignePanier)
  {
    return this.http.post<LignePanier>('http://localhost:8030/apiLignePanier/lignesPaniers/', lp)
  }

  supprimer(idLignePanier:number)
  {
    return this.http.delete('http://localhost:8030/apiLignePanier/lignesPaniers/'+idLignePanier)
  }

  modifier(lp:LignePanier)
  {
    return this.http.put<LignePanier>('http://localhost:8030/apiCategorie/categories', lp)
  }

}
