import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) { }
  user:any
  id:any
  test=false
  edit=false
  edit1=false
  edit2=false
  edit3=false
  edit4=false
  data:any
  token:any
  h=false
  ngOnInit(): void {
    this.edit=false
    this.edit1=false
    this.edit2=false
    this.edit3=false
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");
      this.id = id

    });
    this.getProfile()
  }

  getProfile(){
    this.http.get('http://localhost:3000/user/getUser/'+this.id).subscribe(res => {
      this.user = res
      console.log(res);
    if(this.user.role=="employee"){
      this.test=true
    }

    });
  }
  Edit(){
    if(this.edit==false){
      this.h = true
      this.edit=true
    }
    else{
      this.edit=false
    }
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

  Edit4(){
    if(this.edit4==false){
      this.h = true
      this.edit4=true
    }
    else{
      this.edit4=false
    }
  }


  update(){
    this.http.put('http://localhost:3000/user/updateUser/'+this.id,this.user).subscribe(res => {
      console.log(res);
      this.router.navigate(['Profil/'+this.id])
      this.data = res
      this.token = this.data.jwt;
      const headers =new Headers();
      headers.append('Authorization', `jwt ${this.token}`);
      localStorage.setItem('token',this.token);
      this.token = localStorage.getItem('token');
      this.ngOnInit()
    });
    console.log(this.user)

  }
}
