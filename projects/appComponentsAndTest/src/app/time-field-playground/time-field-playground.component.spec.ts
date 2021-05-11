import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TimeFieldPlaygroundComponent } from './time-field-playground.component';

describe('TimeFieldPlaygroundComponent', () => {
  let component: TimeFieldPlaygroundComponent;
  let fixture: ComponentFixture<TimeFieldPlaygroundComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeFieldPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeFieldPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
