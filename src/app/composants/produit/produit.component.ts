import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/interfaces/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits : Produit[] = [];
  produit: Produit = {};
  
  constructor() { }

  ngOnInit(): void {
  }
  // afficherTout() {
  //   console.log(this.produit)
  // }

  afficherTout() {
    this.produits.push({ ...this.produit }); // Spread operator 
    this.produit = {};    //pour vider le formulaire
  }

}