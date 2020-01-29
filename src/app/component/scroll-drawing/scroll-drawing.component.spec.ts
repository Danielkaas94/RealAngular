import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollDrawingComponent } from './scroll-drawing.component';

describe('ScrollDrawingComponent', () => {
  let component: ScrollDrawingComponent;
  let fixture: ComponentFixture<ScrollDrawingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollDrawingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollDrawingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
