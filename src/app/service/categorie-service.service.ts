import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../models/Categorie.model';
import { Produit } from '../models/Produit.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {

  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get<Categorie[]>('http://localhost:8030/apiCategorie/categories');
      
  }
  
  getByIdCate(idCategorie:number)
  {
  return this.http.get<Categorie>('http://localhost:8030/apiCategorie/categories/'+idCategorie)
  }

  getByProduit(idProduit:number)
  {
    return this.http.get<Categorie>('http://localhost:8030/apiCategorie/categoriesParProduit/'+ idProduit)
  }

  
  supprimer(idCategorie:number)
  {
    return this.http.delete('http://localhost:8030/apiCategorie/categories/'+idCategorie)
  }
  
  modifier(c:Categorie)
  {
    return this.http.put<Categorie>('http://localhost:8030/apiCategorie/categories', c)
  }
  
  ajouter (c:Categorie)
  {
    return this.http.post<Categorie>('http://localhost:8030/apiCategorie/categories', c)
  }




}
