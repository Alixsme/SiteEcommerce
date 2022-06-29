import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Panier } from '../models/Panier.model';

@Injectable({
  providedIn: 'root'
})
export class PanierServiceService {

  constructor(private http:HttpClient) { }



  getAll()
  {
    return this.http.get<Panier[]>('http://localhost:8030/apiPanier/paniers');
  }


  getById(idPanier:number)
  {
  return this.http.get<Panier>('http://localhost:8030/apiPanier/paniers/'+idPanier)
  }

  ajouterUnPanier (p:Panier)
  {
    return this.http.post<Panier>('http://localhost:8030/apiPanier/paniers/', p)
  }

  supprimerPanier(idPanier:number)
  {
    return this.http.delete('http://localhost:8030/apiPanier/paniers/'+idPanier)
  }

  supprimerEnPassantCommande()
  {
    return this.http.delete<Panier>('http://localhost:8030/apiPanier/paniers/')
  }

  modifier(p:Panier)
  {
    return this.http.put<Panier>('http://localhost:8030/apiCategorie/categories', p)
  }

}
