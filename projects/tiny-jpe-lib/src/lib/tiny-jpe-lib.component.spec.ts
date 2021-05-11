import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinyJpeLibComponent } from './tiny-jpe-lib.component';

describe('TinyJpeLibComponent', () => {
  let component: TinyJpeLibComponent;
  let fixture: ComponentFixture<TinyJpeLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinyJpeLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinyJpeLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
