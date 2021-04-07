import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
url="http://localhost:3000/login";
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  loginUser(user){
    console.log(user)
this.http.post(this.url,user).subscribe(data=>{
  console.log(data)
})

  }
}
