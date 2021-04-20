import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Parent1Component } from './parent1.component';

describe('Parent1Component', () => {
  let component: Parent1Component;
  let fixture: ComponentFixture<Parent1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Parent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
