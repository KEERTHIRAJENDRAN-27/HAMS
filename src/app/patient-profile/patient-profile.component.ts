import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Patient, PatientService } from '../patient.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-patient-profile',
  imports: [RouterLink,FormsModule],
  templateUrl: './patient-profile.component.html',
  styleUrl: './patient-profile.component.css'
})
export class PatientProfileComponent {
   constructor(private patientService:PatientService, private router:Router){
    
   }
   save(form:NgForm){
      this.patientService.save(form.value).subscribe(response=>console.log(response))
      alert("Patient registered Succesfully")
      this.router.navigate(['home'])
   }
}
