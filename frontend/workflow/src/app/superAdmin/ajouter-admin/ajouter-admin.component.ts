import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-admin',
  templateUrl: './ajouter-admin.component.html',
  styleUrls: ['./ajouter-admin.component.css']
})
export class AjouterAdminComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
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
  test = false
  test1 = false
  test2 = false
  test3 = false
  test4 = false

  check = true
  response: any
  m1 = ""
  ngOnInit(): void {

  }
  click(){
    this.check=true
  }
  AddAdmin() {

    this.check=true
    if (this.Admin.firstName == "") {
      this.message2 = "firstName is required"
      this.test2 = true
      console.log(this.message2)
    }
    else {
      this.message2 = ""
      this.test2 = false
    }

    if (this.Admin.lastName == "") {
      this.message3 = "lastName is required"
      this.test3 = true
      console.log(this.message3)
    }
    else {
      this.message3 = ""
      this.test3 = false
    }


    if (this.Admin.Email == "") {
      this.message = "Email is required"
      this.test = true
      console.log(this.message)
    }
    else {
      this.message = ""
      this.test = false
    }

    if (this.Admin.password == "")  {
      this.message1 = "password is required"
      this.test1 = true
      console.log(this.message1)
    }
    else {
      this.message1 = ""
      this.test1 = false


    }

    if((this.CPassword == "") || (this.CPassword != this.Admin.password)) {
      this.message4 = "incorrect Password"
      this.test4 = true
      console.log(this.message4)
    }

    else{
      this.message4 = ""
      this.test4 = false
    }



    if (this.test == false && this.test1 == false && this.test2 == false && this.test3 == false && this.test4==false)   {
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
          this.message5=""

        }

      });

    }
    // console.log(this.form)
  }
}
