import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-admin',
  templateUrl: './ajouter-admin.component.html',
  styleUrls: ['./ajouter-admin.component.css']
})
export class AjouterAdminComponent implements OnInit {
 
  constructor(private http: HttpClient, private router: Router,private el: ElementRef) { }
  Admin = {
    Email: '',
    password: '',
    role: '',
    firstName: '',
    lastName: '',
    location: '',
    phoneNumber:'',
  }
  CPassword:any

  message = ""
  message1 = ""
  message2 = ""
  message3 = ""
  message4 = ""
  message5 = ""
  message6=""
  test = false
  test1 = false
  test2 = false
  test3 = false
  test4 = false
  test5=false
  check = true
  response: any
  m1 =true
  ngOnInit(): void {
 
  }
  click(){
    this.check=true
  }
  AddAdmin() {

    this.check=true
   
    //firstName
    if (this.Admin.firstName == "") {
      this.message2 = "firstName is required"
      this.test2 = true
      console.log(this.message2)
    }
    else {
      this.message2 = ""
      this.test2 = false
    }
    //lastName
    if (this.Admin.lastName == "") {
      this.message3 = "lastName is required"
      this.test3 = true
      console.log(this.message3)
    }
    else {
      this.message3 = ""
      this.test3 = false
    }

    //Email
    if ((this.Admin.Email == "") || (this.Admin.Email.indexOf('@') == -1) || (this.Admin.Email.indexOf('.') == -1)) {
      this.message = " verif Email"
      this.test = true
      console.log(this.message)
    }
    else {
      this.message = ""
      this.test = false
    }
    //number phone
    if((this.Admin.phoneNumber=="")||(this.Admin.phoneNumber.length!=8)|| this.Admin.phoneNumber.match(/[a-z]/i)){
      this.message6 = "verif Number"
      this.test5 = true
      console.log(this.message5)
    }

    else {
      this.message6 = ""
      this.test5 = false
    }
//password
    if (this.Admin.password == "")  {
      this.message1 = "password is required"
      this.test1 = true
      console.log(this.message1)
    }
    else {
      this.message1 = ""
      this.test1 = false


    }
//confirme password
    if((this.CPassword == "") || (this.CPassword != this.Admin.password)) {
      this.message4 = "incorrect Password"
      this.test4 = true
      console.log(this.message4)
    }

    else{
      this.message4 = ""
      this.test4 = false
    }



    if (this.test == false && this.test1 == false && this.test2 == false && this.test3 == false && this.test4==false && this.test5==false)   {
      console.log(this.Admin)
      this.http.post('http://localhost:3000/user/addUser', this.Admin).subscribe(res => {
        console.log(res)
        this.response = res
        console.log(this.response.status)
        if (this.response.status == 200) {
          this.check = false
         this.message5 = "User Existe"
         
        }
        if (this.response.status != 200) {
          this.check = true
        
        }
       
      });

    }
     //console.log(this.Admin)
  }
passwordtype:string="password"
passwordshow:boolean=false
changepass(){
  if (this.passwordshow) {
    this.passwordshow=false
    this.passwordtype="password"
  }
  else{
    this.passwordshow=true
    this.passwordtype="text"
  }
}


}

