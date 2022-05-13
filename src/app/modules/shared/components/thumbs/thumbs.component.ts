import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-thumbs',
  templateUrl: './thumbs.component.html',
  styleUrls: ['./thumbs.component.css']
})


export class ThumbsComponent implements OnInit {
  @Input() images: any;

  thumbsSwiper: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.images);
  }

}
