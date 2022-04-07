import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-add-entreprise',
  templateUrl: './add-entreprise.component.html',
  styleUrls: ['./add-entreprise.component.css']
})
export class AddEntrepriseComponent implements OnInit {
  form={
    Email:'',
    password:'',
    Name:'',
    location:'',
    dateDeb:'',
    dateFin:'',
    Cpassword:'',
    }
    dateSysteme:any;
    Mydtae:string=new Date().toLocaleDateString();
    data:any
    token:any
    user:any
  constructor(private http: HttpClient, private router: Router,private datePipe:DatePipe) { }
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.data = jwtDecode(this.token);
    this.user = this.data.user;
    console.log(this.user);


    this.message = ""
    this.message1 = ""
    this.test =false
    this.test1 =false
    this.check = true
    this.testdate=false
this.dateSysteme=this.datePipe.transform(this.Mydtae, 'yyyy-dd-MM');
this.messagedate=""

  }


  message = ""
  message1 = ""
  messagedate=""
  test =false
  test1 =false
  test2=false
  testdate=false
  check = true
  response:any
  AddEntreprise(){

//***************verifie le date*****************
if(( this.form.dateDeb=="" || this.form.dateFin=="")||(this.dateSysteme >= this.form.dateDeb ) ||(this.form.dateDeb > this.form.dateFin)) {
  console.log('date debut est inferieur a la date systeme')
  this.testdate=true;
  this.messagedate="Please check date";
}

else{

  this.messagedate="";
  this.testdate=false;
}
if(this.testdate== false)
{
  this.http.post('http://localhost:3000/Enterprise/addEnterprise', this.form).subscribe(res => {
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
else{
console.log("error")
}
   console.log(this.dateSysteme);
  console.log(this.form.dateFin);
    }
}

