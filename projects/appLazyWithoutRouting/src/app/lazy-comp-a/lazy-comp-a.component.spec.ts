import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LazyCompAComponent } from './lazy-comp-a.component';

xdescribe('LazyCompAComponent', () => {
  let component: LazyCompAComponent;
  let fixture: ComponentFixture<LazyCompAComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LazyCompAComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyCompAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
