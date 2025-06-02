import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  imports: [RouterLink, FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  constructor(private router:Router, private authService:AuthService ){}

  validateR(form:NgForm){
    this.authService.register(form.value).subscribe(response=>console.log(response))
    alert("Registered Successfully")
    this.router.navigate(["/login"])
  }

}
