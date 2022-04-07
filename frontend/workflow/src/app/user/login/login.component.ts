import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  user = {
    Email: '',
    password: '',

  }
  data: any = {};
  token: any;
  user1: any;
  ngOnInit(): void {

  }

  message = ""
  message1 = ""
  message2 = ""

  test = false
  test1 = false
  test2 = false

  login() {
    this.http.post('http://localhost:3000/user/login', this.user).subscribe(res => {
      this.data = res
      this.token = this.data.jwt;
      const headers = new Headers();
      headers.append('Authorization', `jwt ${this.token}`);
      localStorage.setItem('token', this.token);
      this.token = localStorage.getItem('token');



      this.data = jwtDecode(this.token);
      this.user1 = this.data.user;
      /*console.log(this.user1);*/
      console.log(this.user1.role)
      if ((this.user1.role == 'super admin')) {
        this.router.navigate(['/homeSuperadmin/statestique'])
      }
      else {
        this.router.navigate(['/homeadmin'])
      }




    });
    if ((this.data.Email != this.user.Email) || (this.data.password != this.user.password)) {
      this.test2 = true
      this.message2 = "Please check your email and password"

    }
    else {
      this.test2 = false
      this.message2 = ""
    }


  }



}


