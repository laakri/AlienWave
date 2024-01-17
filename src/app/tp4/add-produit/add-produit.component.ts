import { Component } from '@angular/core';
import { Produit } from '../../models/produit.model';
import { ProduitService } from '../../service/product.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css'],
})
export class AddProduitComponent {
  constructor(private ProduitService: ProduitService) {}
  newProduit = new Produit();
  date!: Date;
  addProduit() {
    this.newProduit.dateCreation = this.date;
    console.log(this.newProduit);

    this.ProduitService.ajouterProduit(this.newProduit);
  }
}
