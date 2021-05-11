import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsuleListItemComponent } from './capsule-list-item.component';

describe('CapsuleListItemComponent', () => {
  let component: CapsuleListItemComponent;
  let fixture: ComponentFixture<CapsuleListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapsuleListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsuleListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
