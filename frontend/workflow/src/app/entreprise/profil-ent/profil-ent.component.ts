import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-profil-ent',
  templateUrl: './profil-ent.component.html',
  styleUrls: ['./profil-ent.component.css']
})
export class ProfilEntComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }
  id: any
  entreprise: any
  data: any
  token: any
  user: any
  edit1=false
  edit2=false
  edit3=false
  h=false

  ngOnInit(): void {

    this.token = localStorage.getItem('token');
    this.data = jwtDecode(this.token);
    this.user = this.data.user;
    console.log(this.user);


    this.route.paramMap.subscribe(params => {
      const id = params.get("id");
      this.id = id

    });
   
    this.getProfile()
 
  }
  getProfile() {
    this.http.get('http://localhost:3000/Enterprise/getEnterprise/' + this.id).subscribe(res => {
      this.entreprise = res
      console.log(res);
    });
  }




  Edit1(){
    if(this.edit1==false){
      this.h = true
      this.edit1=true
    }
    else{
      this.edit1=false
    }
  }

  Edit2(){
    if(this.edit2==false){
      this.h = true
      this.edit2=true
    }
    else{
      this.edit2=false
    }
  }

  Edit3(){
    if(this.edit3==false){
      this.h = true
      this.edit3=true
    }
    else{
      this.edit3=false
    }
  }

 
  update(){
    this.http.put('http://localhost:3000/enterprise/updateEnterpris/'+this.id,this.entreprise).subscribe(res => {
      console.log(res);
      this.router.navigate(['ProfilEnt/'+this.id])
      this.data = res
      console.log(this.data);
      this.token = this.data.jwt;
      const headers =new Headers();
      headers.append('Authorization', `jwt ${this.token}`);
      localStorage.setItem('token',this.token);
      this.token = localStorage.getItem('token');
      this.ngOnInit()
    });
    //console.log(this.entreprise)
   

  }
}


