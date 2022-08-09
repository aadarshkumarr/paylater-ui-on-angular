import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyCreditCardComponent } from './apply-credit-card.component';

describe('ApplyCreditCardComponent', () => {
  let component: ApplyCreditCardComponent;
  let fixture: ComponentFixture<ApplyCreditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyCreditCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
