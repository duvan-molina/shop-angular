import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testiomal-card',
  templateUrl: './testiomal-card.component.html',
  styleUrls: ['./testiomal-card.component.css'],
})
export class TestiomalCardComponent implements OnInit {
  @Input() testimonial: any = {};
  constructor() {}

  ngOnInit(): void {}
}
