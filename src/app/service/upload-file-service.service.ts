import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadFileServiceService {

  constructor(private http:HttpClient) { }

  saveFile(data:FormData)
  {
    return this.http.post('http://localhost:8030/apiProduit/produits', data)
  }
  saveFile2(data:FormData)
  {
    return this.http.post('http://localhost:8030/apiProduit/ModifierProduit', data)
  }
}
