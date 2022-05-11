import { Component, OnInit } from '@angular/core';
import { AllServices, Product } from 'src/app/services/all.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productsList: Product[] = [];

  constructor(private products: AllServices) {}

  ngOnInit(): void {
    this.productsList = this.products.getProducts(30);
  }
}
