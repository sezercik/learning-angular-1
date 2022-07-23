import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent{
  selectedProduct:Product= new Product(0,"","","",0);
  model:ProductComponent;

  constructor() {
    this.model = new ProductComponent();
  }

}
