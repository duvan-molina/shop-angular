import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AllServices, ItemCarousel } from 'src/app/services/all.service';
import SwiperCore, { Autoplay, Navigation } from 'swiper';

SwiperCore.use([Navigation, Autoplay]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent implements OnInit {
  items: ItemCarousel[] = []
  // @ts-ignore
  onSwiper([swiper]) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  constructor(private allServices: AllServices) {
  }

  ngOnInit(): void {
    this.items = this.allServices.getItemsCarousel()
    console.log(this.items);
  }
}
