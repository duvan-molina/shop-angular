import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllServices, Product, ProductById } from 'src/app/services/all.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productsList: Product[] = [];
  productById: any;
  name: string = '';
  constructor(
    private products: AllServices,
    private activatedRouted: ActivatedRoute
  ) {
    this.productsList = this.products.getProducts(10);
    this.productById = this.products.getProductById();

    this.activatedRouted.params.subscribe((params) => {
     this.name = params['slug']
    });
  }

  ngOnInit(): void {
    console.log(this.productById);
  }
}
