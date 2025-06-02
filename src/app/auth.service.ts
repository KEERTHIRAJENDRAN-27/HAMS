import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  pathR="http://localhost:9091/auth/new"
  pathL="http://localhost:9091/auth/authenticate"

  constructor(private client:HttpClient) { }

  public login(authUser: User): Observable<string> {
    console.log("Inside autheticate")
    console.log(authUser)
    return this.client.post(this.pathL, authUser, { responseType: 'text' });
  }

  register(register:RegisterUser){
    return this.client.post(this.pathR,register,{responseType: 'text'})
  }

}
export class User {
  username: string
  password: string
  constructor(username: string, password: string) {
    this.username = username
    this.password = password
  }
}

export  class RegisterUser{
  username:string
  email:string
  password:string
  roles:string
  constructor(username: string,email:string,  password: string,roles:string)
  {
    this.username=username
    this.email=email
    this.password=password
    this.roles=roles
  }

}