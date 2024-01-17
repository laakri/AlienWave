import { Component, OnInit } from '@angular/core';
import { Produit } from '../../models/produit.model';
import { ProduitService } from '../../service/product.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit {
  Produits: Produit[] = [];

  constructor(private ProduitService: ProduitService) {
    this.Produits = ProduitService.listeProduits();
  }
  ngOnInit() {}
}
