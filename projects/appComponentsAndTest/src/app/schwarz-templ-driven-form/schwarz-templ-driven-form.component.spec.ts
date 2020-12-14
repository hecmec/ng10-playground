import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchwarzTemplDrivenFormComponent } from './schwarz-templ-driven-form.component';

describe('SchwarzTemplDrivenFormComponent', () => {
  let component: SchwarzTemplDrivenFormComponent;
  let fixture: ComponentFixture<SchwarzTemplDrivenFormComponent>;

  beforeEach(async(() => {
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
