import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DirectivesTestComponent } from './directives-test.component';

xdescribe('DirectivesTestComponent', () => {
  let component: DirectivesTestComponent;
  let fixture: ComponentFixture<DirectivesTestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesTestComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
