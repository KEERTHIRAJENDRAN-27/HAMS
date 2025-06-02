import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorNotifyComponent } from './doctor-notify.component';

describe('DoctorNotifyComponent', () => {
  let component: DoctorNotifyComponent;
  let fixture: ComponentFixture<DoctorNotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorNotifyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
