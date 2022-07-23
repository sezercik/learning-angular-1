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
  products:Product[];
  model:ProductComponent;

  constructor() {
    this.model = new ProductComponent();
    this.products = this.model.getProducts();
  }

  getSelected(product:Product):boolean{
    return product == this.selectedProduct;
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  editProduct(product:Product){
    this.selectedProduct = product;
  }

  saveChanges(pName:string,pPrice:number,pImageUrl:string,pDescription:string,){
    let p:Product = this.model.getProductById(this.selectedProduct.id);
    p.name = pName;
    p.price = pPrice;
    p.description = pDescription;
    p.imageUrl = pImageUrl;
    this.selectedProduct = new Product(0,"","","",0);
  }
}
