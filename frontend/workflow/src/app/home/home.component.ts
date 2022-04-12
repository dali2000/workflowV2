import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  token :any;
  data :any;
  user :any;
  test=true
  tasks:any;
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.data = jwtDecode(this.token);
    this.user = this.data.user;
    console.log(this.user);

    if(this.user.role == "user"){
      this.test = false
    }
    this.getMyUserTasks()
  }
  getMyUserTasks(){
    this.http.get("http://localhost:3000/task/getTasks/"+this.user.id).subscribe(res=>{
      this.tasks = res
      console.log(res)
    })
  }
}
