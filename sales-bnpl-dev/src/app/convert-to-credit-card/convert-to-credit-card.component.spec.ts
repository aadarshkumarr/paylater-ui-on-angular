import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertToCreditCardComponent } from './convert-to-credit-card.component';

describe('ConvertToCreditCardComponent', () => {
  let component: ConvertToCreditCardComponent;
  let fixture: ComponentFixture<ConvertToCreditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertToCreditCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
