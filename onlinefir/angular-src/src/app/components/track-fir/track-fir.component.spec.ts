import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackFIRComponent } from './track-fir.component';

describe('TrackFIRComponent', () => {
  let component: TrackFIRComponent;
  let fixture: ComponentFixture<TrackFIRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackFIRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackFIRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
