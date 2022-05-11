import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestiomalCardComponent } from './testiomal-card.component';

describe('TestiomalCardComponent', () => {
  let component: TestiomalCardComponent;
  let fixture: ComponentFixture<TestiomalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestiomalCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestiomalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
