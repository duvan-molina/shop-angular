import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

@Injectable()
export class AllServices {
  private products = (quantity: number = 10): Product[] =>
    new Array(quantity).fill(0).map((_, i) => ({
      id: `${new Date().getTime() + i}`,
      title: faker.commerce.productName(),
      imagen: faker.image.image(),
      price: Number(faker.commerce.price()),
    }));

  private banners: Banner[] = [
    {
      text: 'Entrega Rápida y Segura',
    },
    {
      text: 'Métodos de Pago',
    },
    {
      text: 'Máxima Calidad',
    },
    {
      text: '¿Necesitas ayuda?',
    },
  ];

  constructor() {}

  getProducts(quantity?: number) {
    return this.products(quantity);
  }

  getBanners() {
    return this.banners;
  }
}

export interface Product {
  id: string;
  title: string;
  imagen: string;
  price: number;
}

export interface Banner {
  text: string;
}
