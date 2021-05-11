import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LazyChildComponent } from './lazy-child.component';

xdescribe('LazyChildComponent', () => {
  let component: LazyChildComponent;
  let fixture: ComponentFixture<LazyChildComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LazyChildComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
