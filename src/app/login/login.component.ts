import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(private router:Router, private authService:AuthService ){}

validateL(form:NgForm){
  this.authService.login(form.value).subscribe(response=>{
    console.log(response);
    localStorage.setItem("JWT",response)
    this.router.navigate(['/landingPage'])
  })
}
}
