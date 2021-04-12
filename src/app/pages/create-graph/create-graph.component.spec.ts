import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGraphComponent } from './create-graph.component';

describe('CreateGraphComponent', () => {
  let component: CreateGraphComponent;
  let fixture: ComponentFixture<CreateGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
