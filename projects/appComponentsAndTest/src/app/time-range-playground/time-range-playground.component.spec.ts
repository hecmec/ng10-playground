import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeRangePlaygroundComponent } from './time-range-playground.component';

describe('TimeRangePlaygroundComponent', () => {
  let component: TimeRangePlaygroundComponent;
  let fixture: ComponentFixture<TimeRangePlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeRangePlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeRangePlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
