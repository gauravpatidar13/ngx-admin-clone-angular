import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceChartsComponent } from './ecommerce-charts.component';

describe('EcommerceChartsComponent', () => {
  let component: EcommerceChartsComponent;
  let fixture: ComponentFixture<EcommerceChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerceChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
