import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../models/Produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {

  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get<Produit[]>('http://localhost:8030/apiProduit/produits');
 
  }
  
  getByIdProd(idProduit:number)
  {
  return this.http.get<Produit>('http://localhost:8030/apiProduit/produits/'+idProduit)
  }

  getByIdCat(idCategorie:number)
  {
  return this.http.get<Produit[]>('http://localhost:8030/apiProduit/produitsParCat/'+idCategorie)
  }
  
  supprimer(idProduit:number)
  {
    return this.http.delete('http://localhost:8030/apiProduit/produits/'+idProduit)
  }
  
  //CHECKER LATER
  modifier(data:FormData)
  {
    return this.http.post<Produit>('http://localhost:8030/apiProduit/ModifierProduit', data)
  }
  
  ajouter (p:Produit)
  {
    return this.http.post<Produit>('http://localhost:8030/apiProduit/produits', p)
  }

  search(libProduit:string)
  {
    return this.http.get<Produit[]>('http://localhost:8030/apiProduit/SearchProduit/'+libProduit)
  }

}
