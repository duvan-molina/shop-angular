import { Component, OnInit } from '@angular/core';
import { AllServices, Banner, Product } from 'src/app/services/all.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  bannersList: Banner[] = [];
  productsList: Product[] = [];
  constructor(private banners: AllServices) {}

  ngOnInit(): void {
    this.productsList = this.banners.getProducts(4);
    this.bannersList = this.banners.getBanners();

    console.log(this.productsList);
  }
}
