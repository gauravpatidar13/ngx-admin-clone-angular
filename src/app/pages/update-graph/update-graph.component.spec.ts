import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGraphComponent } from './update-graph.component';

describe('UpdateGraphComponent', () => {
  let component: UpdateGraphComponent;
  let fixture: ComponentFixture<UpdateGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
