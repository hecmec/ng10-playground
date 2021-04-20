import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TimeRangeSimpleComponent } from './time-range-simple.component';

xdescribe('TimeRangeSimpleComponent', () => {
  let component: TimeRangeSimpleComponent;
  let fixture: ComponentFixture<TimeRangeSimpleComponent>;

  beforeEach(waitForAsync(() => {
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
