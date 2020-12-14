import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeRangeSimpleComponent } from './time-range-simple.component';

describe('TimeRangeSimpleComponent', () => {
  let component: TimeRangeSimpleComponent;
  let fixture: ComponentFixture<TimeRangeSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeRangeSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeRangeSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
