import { Component, OnInit } from '@angular/core';
import { AllServices, Product } from 'src/app/services/all.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productsList: Product[] = [];
  constructor(private products: AllServices) {
    this.productsList = this.products.getProducts(10);
  }

  ngOnInit(): void {}
}
