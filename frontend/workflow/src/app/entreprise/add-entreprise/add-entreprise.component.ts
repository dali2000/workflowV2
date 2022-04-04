import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-entreprise',
  templateUrl: './add-entreprise.component.html',
  styleUrls: ['./add-entreprise.component.css']
})
export class AddEntrepriseComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.message = ""
    this.message1 = ""
    this.test =false
    this.test1 =false
    this.check = true
  }
  form={
    Email:'',
    password:'',
    Name:'',
    location:'',
    
    }

  
  message = ""
  message1 = ""
  test =false
  test1 =false
  test2=false
  check = true
  response:any
  AddEntreprise(){

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
}

