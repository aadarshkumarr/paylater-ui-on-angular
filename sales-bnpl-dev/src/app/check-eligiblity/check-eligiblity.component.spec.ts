import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckEligiblityComponent } from './check-eligiblity.component';

describe('CheckEligiblityComponent', () => {
  let component: CheckEligiblityComponent;
  let fixture: ComponentFixture<CheckEligiblityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckEligiblityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckEligiblityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
