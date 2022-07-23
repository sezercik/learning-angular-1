import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductRepository } from '../repository.model';

@Component({
  selector: 'app',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  model:ProductRepository = new ProductRepository();

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(){
    this.model.addProduct(new Product(6,"Samsung S10","Telefon","1.jpeg",1000));
  }

  deleteProduct(product:Product){
    this.model.deleteProduct(product);
  }

  updateProduct(product:Product){
    product.name = "updated";
  }

  getProducts():Product[]{
    return this.model.getProducts();
  }

  getProductById(id:number):Product{
    return this.model.getProductById(id);
  }
}
