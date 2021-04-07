import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficRevealComponent } from './traffic-reveal.component';

describe('TrafficRevealComponent', () => {
  let component: TrafficRevealComponent;
  let fixture: ComponentFixture<TrafficRevealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrafficRevealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficRevealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
