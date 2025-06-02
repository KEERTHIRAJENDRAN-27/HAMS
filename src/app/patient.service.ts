import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  paths="http://localhost:8001/patients/register"
  constructor(private client:HttpClient) { }

  public save(savePat:Patient):Observable<string>{
    console.log(savePat)
    return this.client.post(this.paths,savePat,{responseType:'text'})
  }
}

export class Patient{
  name:string;
  age:number;
  bloodGroup:string;
  gender:string;
  dateOfBirth:Date;
  medicalHistory:string;
  email:string;
  contactDetails:string;

  constructor(name:string, age:number,bloodGroup:string,gender:string,dateOfBirth:Date,medicalHistory:string,email:string,contactDetails:string){
    this.name=name
    this.age=age
    this.bloodGroup=bloodGroup
    this.gender=gender
    this.dateOfBirth=dateOfBirth
    this.medicalHistory=medicalHistory
    this.email=email
    this.contactDetails=contactDetails

  }
}
