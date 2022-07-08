import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../interfaces/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private url: string = "http://localhost:5555/produits";
  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Produit[]>(this.url);
  }

  getOneProduct(id: number) {                                          //ajouter pour la partie modification
    return this.http.get<Produit>(this.url + "/" + id);
  }

  // ajouter pour la partie recuperer les produits de la base de données

  addProduct(p: Produit) {
    return this.http.post<Produit>(this.url, p);
  }

//partie supprimer


  deleteProduct(id: number) {
  return this.http.delete(this.url + "/" + id);
}

//partie modification
  updateProduct(p: Produit) {
    return this.http.put<Produit>(this.url + "/" + p.id, p);
}
  }

