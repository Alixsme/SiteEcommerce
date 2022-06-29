import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/Utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurServiceService {

  constructor(private http:HttpClient) { }

  ajouter (u:Utilisateur, idRole:number)
  {
    return this.http.post<Utilisateur>('http://localhost:8030/apiUtilistateur/utilisateurs/'+idRole, u)
  }

  supprimer(id:number)
  {
    return this.http.delete('http://localhost:8030/apiUtilistateur/SupprUtilisateurs/'+id)
  }

}
