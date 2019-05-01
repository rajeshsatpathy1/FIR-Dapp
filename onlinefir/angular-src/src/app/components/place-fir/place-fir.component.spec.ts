import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceFIRComponent } from './place-fir.component';

describe('PlaceFIRComponent', () => {
  let component: PlaceFIRComponent;
  let fixture: ComponentFixture<PlaceFIRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceFIRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceFIRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
