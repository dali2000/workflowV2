import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listusergroup',
  templateUrl: './listusergroup.component.html',
  styleUrls: ['./listusergroup.component.css']
})
export class ListusergroupComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) { }
id: any

  ngOnInit(): void {
   

    this.route.paramMap.subscribe(params => {
      const id = params.get("id");
      this.id = id

    });
    this.getUserGroup();
    this.AddUserGroup();
  }
  Users: any

  getUserGroup() {
    this.http.get('http://localhost:3000/user/getByGroup/'+this.id).subscribe(res => {
      console.log(res)
      this.Users = res
    });
  }
  user={
    Email: '',
    password: '',
    role: '',
    firstName: '',
    lastName: '',
    location: '',
    phoneNumber:'',
    groupId: '',
    
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
  

AddUserGroup() {
/*  //firstName
  if (this.user.firstName == "") {
    this.message2 = "firstName is required"
    this.test2 = true
    console.log(this.message2)
  }
  else {
    this.message2 = ""
    this.test2 = false
  }
  //lastName
  if (this.user.lastName == "") {
    this.message3 = "lastName is required"
    this.test3 = true
    console.log(this.message3)
  }
  else {
    this.message3 = ""
    this.test3 = false
  }

  //Email
  if ((this.user.Email == "") || (this.user.Email.indexOf('@') == -1) || (this.user.Email.indexOf('.') == -1)) {
    this.message = " verif Email"
    this.test = true
    console.log(this.message)
  }
  else {
    this.message = ""
    this.test = false
  }
  //number phone
  if((this.user.phoneNumber=="")||(this.user.phoneNumber.length!=8)|| this.user.phoneNumber.match(/[a-z]/i)){
    this.message6 = "verif Number"
    this.test5 = true
    console.log(this.message5)
  }

  else {
    this.message6 = ""
    this.test5 = false
  }
//password
  if (this.user.password == "")  {
    this.message1 = "password is required"
    this.test1 = true
    console.log(this.message1)
  }
  else {
    this.message1 = ""
    this.test1 = false


  }*/
//confirme password
  if((this.CPassword == "") || (this.CPassword != this.user.password)) {
    this.message4 = "incorrect Password"
    this.test4 = true
    console.log(this.message4)
  }

  else{
    this.message4 = ""
    this.test4 = false
  }

console.log(this.user)
  this.user.groupId = this.id;
 if(this.test4==false){
  this.http.post('http://localhost:3000/user/addUser', this.user).subscribe(res => {
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
