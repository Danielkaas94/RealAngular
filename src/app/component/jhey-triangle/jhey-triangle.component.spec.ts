import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JheyTriangleComponent } from './jhey-triangle.component';

describe('JheyTriangleComponent', () => {
  let component: JheyTriangleComponent;
  let fixture: ComponentFixture<JheyTriangleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JheyTriangleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JheyTriangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
