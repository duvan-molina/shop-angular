import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

@Injectable()
export class AllServices {
  private products = (quantity: number = 10): Product[] =>
    new Array(quantity).fill(0).map((_, i) => {
      const title = faker.commerce.productName();
      return {
        id: `${new Date().getTime() + i}`,
        title,
        imagen: faker.image.image(),
        price: Number(faker.commerce.price()),
        // @ts-ignore
        slug: title.toLowerCase().trim().replaceAll(' ', '-'),
      };
    });

  private testimonials = (quantity: number = 3): Testimonial[] =>
    new Array(quantity).fill(0).map((_, i) => ({
      id: `${new Date().getTime() + i}`,
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      text: faker.lorem.sentence(),
      avatar: faker.image.avatar(),
      rating: Number(faker.datatype.number({ min: 1, max: 5 })),
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

  getTestimonials(quantity?: number) {
    return this.testimonials(quantity);
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
  slug: string;
}

export interface Testimonial {
  id: string;
  text: string;
  avatar: string;
  name: string;
  lastName: string;
  rating: number;
}
export interface Banner {
  text: string;
}
