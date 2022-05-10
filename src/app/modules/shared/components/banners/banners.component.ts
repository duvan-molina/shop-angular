import { Component, Input, OnInit } from '@angular/core';
import { Banner } from 'src/app/services/all.service';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css'],
})
export class BannersComponent implements OnInit {
  @Input() banner: any = {};
  constructor() {}

  ngOnInit(): void {}
}
