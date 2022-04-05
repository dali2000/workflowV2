import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  form={
    firstName:'',
    phoneNumber:'',
    lastName:'',
    Email:'',
    password:'',
    location:'',
    role:'', 
    
  }
  confrimPassword =''
  message = ""
  message1 = ""
  test =false
  test1 =false
  check = true
  response:any
  ngOnInit(): void {
    this.test = false
    this.test1 = false
    this.message1 = ""
    this.message = ""
  }

  SignUp(){
    if(this.form.password==""){
      this.message1 = "password is required"
      this.test1 = true
      console.log(this.message)
    }
    else{
      this.message1 = ""
      this.test1 = false
      
    }
    if(this.confrimPassword==""){
      this.message = "Please confirm your password"
      this.test =true
      console.log(this.message)
    }
     else if(this.form.password != this.confrimPassword){
      this.message = "Please confirm your password"
      this.test =true
      console.log(this.message)
    
    }
    else{
      console.log(this.form)
      this.test =false
      this.message = ""
      console.log(this.message)
    }

    if(this.test == false && this.test1 == false){
      console.log(this.form)
      this.http.post('http://localhost:3000/user/addUser', this.form).subscribe(res => {
        console.log(res)
        this.response = res
        console.log(this.response.status)
        if (this.response.status == 200) {
          this.check = false
          

        }
        if (this.response.status != 200) {
          this.check = true
          

        }

      });
    }
  }

}
