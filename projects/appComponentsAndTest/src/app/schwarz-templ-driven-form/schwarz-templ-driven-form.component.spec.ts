import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SchwarzTemplDrivenFormComponent } from './schwarz-templ-driven-form.component';

xdescribe('SchwarzTemplDrivenFormComponent', () => {
  let component: SchwarzTemplDrivenFormComponent;
  let fixture: ComponentFixture<SchwarzTemplDrivenFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SchwarzTemplDrivenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchwarzTemplDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
