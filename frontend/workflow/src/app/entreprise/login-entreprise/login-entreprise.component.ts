import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-login-entreprise',
  templateUrl: './login-entreprise.component.html',
  styleUrls: ['./login-entreprise.component.css']
})
export class LoginEntrepriseComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  user={
    Email:'',
    password:'',

  }
  data:any = {};
  token:any;
  user1 :any;


  message = ""
  message1 = ""
  message2 = ""

  test = false
  test1 = false
  test2 = false

  login(){
    this.http.post('http://localhost:3000/enterprise/login',this.user).subscribe(res=>{
      this.data = res
      this.token = this.data.jwt
      console.log(res)
        const headers =new Headers();
        // headers.append('Authorization', `jwt ${this.token}`);
        localStorage.setItem('token',this.token);
        this.token = localStorage.getItem('token');



        this.data = jwtDecode(this.token);
        this.user1 = this.data.user;
        /*console.log(this.user1);*/
        console.log(this.user1.role)
        if(this.token){
          this.router.navigate(['/HomeEntreprise'])
        }
        else {
          this.router.navigate(['/Home'])
        }




    });


    }



}
