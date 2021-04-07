import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLeafletDemoComponent } from './ngx-leaflet-demo.component';

describe('NgxLeafletDemoComponent', () => {
  let component: NgxLeafletDemoComponent;
  let fixture: ComponentFixture<NgxLeafletDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxLeafletDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLeafletDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
