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

  dateSysteme: any;
  Mydtae: string = new Date().toLocaleDateString();
  data: any
  token: any
  user: any
  d: any
  f: any
  constructor(private http: HttpClient, private router: Router, private datePipe: DatePipe) { }
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.data = jwtDecode(this.token);
    this.user = this.data.user;
    console.log(this.user);


    this.message = ""
    this.message1 = ""
    this.test = false
    this.test1 = false
    this.test2 = false
    this.test3 = false
    this.test4 = false
    this.check = true
    this.testdate = false
    this.dateSysteme = this.datePipe.transform(this.Mydtae, 'yyyy-dd-MM');
    this.messagedate = ""



  }



  message = ""
  message1 = ""
  message3 = ""
  message4 = ""
  messagedate = ""
  test = false
  test1 = false
  test2 = false
  test3 = false
  test4 = false
  testdate = false
  check = true
  response: any
  form = {
    Email: '',
    password: '',
    Name: '',
    location: '',
    dateDeb: '',
    dateFin: '',
    Cpassword: '',
    nbjour:'',
  }

  dateDeb:any
  dateFin :any
  nb:any
  AddEntreprise() {
    // verif des champs
    if (this.form.Email == "") {
      this.message = "Email is required"
      this.test2 = true
      console.log(this.message)
    }
    else {
      this.message = ""
      this.test2 = false
    }

    if (this.form.Name == "") {
      this.message3 = "Name is required"
      this.test3 = true
      console.log(this.message3)
    }
    else {
      this.message3 = ""
      this.test3 = false
    }




    if (this.form.password == "")  {
      this.message1 = "password is required"
      this.test1 = true
      console.log(this.message1)
    }
    else {
      this.message1 = ""
      this.test1 = false


    }

    if((this.form.Cpassword == "") || (this.form.Cpassword != this.form.password)) {
      this.message4 = "incorrect Password"
      this.test4 = true
      console.log(this.message4)
    }

    else{
      this.message4 = ""
      this.test4 = false
    }
    //***************verifie le date*****************
    if ((this.form.dateDeb == "" || this.form.dateFin == "") || (this.dateSysteme >= this.form.dateDeb) || (this.form.dateDeb > this.form.dateFin)) {
      console.log('date debut est inferieur a la date systeme')
      this.testdate = true;
      this.messagedate = "Please check date";
    }

    else {

      this.messagedate = "";
      this.testdate = false;
    }
    if (this.testdate == false && this.test1 == false && this.test2 == false && this.test3 == false && this.test4 == false) {
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
    else {
      console.log("error")
    }
    this.dateDeb=new Date(this.form.dateDeb).getTime()
    this.dateFin=new Date(this.form.dateFin).getTime()
    this.nb=(this.dateFin-this.dateDeb)/(1000*60*60*24)
    this.form.nbjour=this.nb
  }
 
  
}

