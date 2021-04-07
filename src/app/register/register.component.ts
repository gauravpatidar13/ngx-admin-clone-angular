import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
url="http://localhost:3000/register";
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  registerUser(user){
    console.log(user)
this.http.post(this.url,user).subscribe(data=>{
  console.log(data)
  this.router.navigate(["pages/dashboard"])
})
  }
}
