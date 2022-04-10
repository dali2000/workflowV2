import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-list-workflow',
  templateUrl: './list-workflow.component.html',
  styleUrls: ['./list-workflow.component.css']
})
export class ListWorkflowComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  term: any;
  token :any;
  data :any;
  user1 :any;
  user:any;
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.data = jwtDecode(this.token);
    this.user = this.data.user;
    console.log(this.user);
    this.getWorkflow();
  }
  

  workflow:any
  getWorkflow(){
    this.http.get('http://localhost:3000/workflow/workflows').subscribe(res=>{
      console.log(res)
      this.workflow= res
    });
  }
}
