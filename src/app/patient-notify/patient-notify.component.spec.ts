import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientNotifyComponent } from './patient-notify.component';

describe('PatientNotifyComponent', () => {
  let component: PatientNotifyComponent;
  let fixture: ComponentFixture<PatientNotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientNotifyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
