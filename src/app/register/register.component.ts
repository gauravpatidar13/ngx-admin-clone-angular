import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
url="http://localhost:3000/register";
emailAlreadyError;
invalidEmail;
error;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
 
  registerUser(user){
    console.log(user)
this.http.post(this.url,user).subscribe((data=>{
  console.log(data)
  let response:any=data;
  if(response.error){
this.emailAlreadyError=response.error;
  }else{
    this.router.navigate(["pages/dashboard"])
  }
}),error=>{
  this.error=error;
  console.log(error)
})
  }
 
}
