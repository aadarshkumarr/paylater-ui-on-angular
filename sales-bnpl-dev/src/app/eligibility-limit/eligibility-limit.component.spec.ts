import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilityLimitComponent } from './eligibility-limit.component';

describe('EligibilityLimitComponent', () => {
  let component: EligibilityLimitComponent;
  let fixture: ComponentFixture<EligibilityLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibilityLimitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibilityLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
