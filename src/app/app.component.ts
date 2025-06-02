import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SpecialistComponent } from './specialist/specialist.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { PatientComponent } from './patient/patient.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorScheduleComponent } from './doctor-schedule/doctor-schedule.component';
import { DoctorNotifyComponent } from './doctor-notify/doctor-notify.component';
import { PatientNotifyComponent } from './patient-notify/patient-notify.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,HeaderComponent,HomeComponent,SpecialistComponent,
    LandingPageComponent,LoginComponent,RegistrationComponent,ContactComponent,PatientComponent,
  PatientProfileComponent,DoctorComponent,DoctorScheduleComponent,DoctorNotifyComponent,PatientNotifyComponent,
BookAppointmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HAMS';
  
}
