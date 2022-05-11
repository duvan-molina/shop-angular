import { Component, OnInit } from '@angular/core';
import {
  AllServices,
  Banner,
  Product,
  Testimonial,
} from 'src/app/services/all.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  bannersList: Banner[] = [];
  productsList: Product[] = [];
  testimonialsList: Testimonial[] = [];

  constructor(private allServices: AllServices) {}

  ngOnInit(): void {
    this.productsList = this.allServices.getProducts(4);
    this.bannersList = this.allServices.getBanners();
    this.testimonialsList = this.allServices.getTestimonials();
  }
}
