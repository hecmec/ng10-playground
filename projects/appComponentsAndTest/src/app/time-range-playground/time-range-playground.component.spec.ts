import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TimeRangePlaygroundComponent } from './time-range-playground.component';

xdescribe('TimeRangePlaygroundComponent', () => {
  let component: TimeRangePlaygroundComponent;
  let fixture: ComponentFixture<TimeRangePlaygroundComponent>;

  beforeEach(waitForAsync(() => {
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
