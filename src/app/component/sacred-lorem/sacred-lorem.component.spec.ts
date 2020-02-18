import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SacredLoremComponent } from './sacred-lorem.component';

describe('SacredLoremComponent', () => {
  let component: SacredLoremComponent;
  let fixture: ComponentFixture<SacredLoremComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SacredLoremComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SacredLoremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
