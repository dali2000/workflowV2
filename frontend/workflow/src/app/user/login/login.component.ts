import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  user={
    Email:'',
    password:'',
  }
  data:any = {};
  token:any;
  ngOnInit(): void {
  }
    
  message = ""
  message1 = ""
  message2 = ""

  test = false
  test1 = false
  test2 = false

  login(){
    this.http.post('http://localhost:3000/user/login',this.user).subscribe(res=>{
      console.log(res)
      this.data = res
      this.token = this.data.token;
      const headers =new Headers();
      headers.append('Authorization', `jwt ${this.token}`);
      localStorage.setItem('token',this.token);
      this.token = localStorage.getItem('token');
    });
    if(this.token !=null){
      this.router.navigate(['/Home'])
    }
    else{
      this.test2 = true
      this.message2 = "Please check your email and password"
      
    }
  }

}
