import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLimitComponent } from './manage-limit.component';

describe('ManageLimitComponent', () => {
  let component: ManageLimitComponent;
  let fixture: ComponentFixture<ManageLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageLimitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
