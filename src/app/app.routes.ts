import { Routes } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
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

export const routes: Routes = [
    // {path:"",component:HeaderComponent},
    {path:"home",component:HomeComponent},
    {path:"specialist",component:SpecialistComponent},
    {path:"",component:LandingPageComponent},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegistrationComponent},
    {path:"contact",component:ContactComponent},
    {path:"patient",component:PatientComponent},
    {path:"patientP",component:PatientProfileComponent},
    {path:"doctor",component:DoctorComponent},
    {path:"doctorS",component:DoctorScheduleComponent},
    {path:"doctorN",component:DoctorNotifyComponent},
    {path:"patientN",component:PatientNotifyComponent},
    {path:"bookAppointment",component:BookAppointmentComponent}
];
