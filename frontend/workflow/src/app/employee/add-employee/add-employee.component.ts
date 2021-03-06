import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.message = ""
    this.message1 = ""
    this.test =false
    this.test1 =false
    this.test2 =false
    this.test3 =false
    this.check = true
  }
  employer={
    firstName:'',
    lastName:'',
    Email:'',
    password:'',
    location:'',
    role:'employee',  
    }

  
  message = ""
  message1 = ""
  message2 = ""
  message3 = ""

  test =false
  test1 =false
  test2 =false
  test3 =false
  check = true
  response:any
  AddEmployee(){

    if(this.employer.firstName==""){
      this.message2 = "FirstName is required"
      this.test2 =true
      console.log(this.message2)
    }
    else  {
      this.message2 = ""
        this.test2 = false
    } 

    if(this.employer.lastName==""){
      this.message3 = "LastName is required"
      this.test3 =true
      console.log(this.message3)
    }
    else  {
      this.message3 = ""
        this.test3 = false
    } 

    if(this.employer.Email==""){
      this.message = "Email is required"
      this.test =true
      console.log(this.message)
    }
    else  {
      this.message = ""
        this.test = false
    } 
  
      if(this.employer.password==""){
        this.message1 = "password is required"
        this.test1 = true
        console.log(this.message)
      }
      else{
        this.message1 = ""
        this.test1 = false
        
        }
        if(this.test1 == false && this.test==false){
          this.check = false
        }
        else{
          this.check = true
        }

        if(this.test1 == false && this.test==false && this.test2 == false && this.test3 == false){
      console.log(this.employer)
      this.http.post('http://localhost:3000/user/addUser', this.employer).subscribe(res => {
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
