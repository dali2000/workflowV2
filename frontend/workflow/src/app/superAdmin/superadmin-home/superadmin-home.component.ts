import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-superadmin-home',
  templateUrl: './superadmin-home.component.html',
  styleUrls: ['./superadmin-home.component.css']
})
export class SuperadminHomeComponent implements OnInit {

  constructor(private router: Router) { }
  
  token :any;
  data :any;
  user :any;
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.data = jwtDecode(this.token);
    this.user = this.data.user;
    console.log(this.user);
  }

}
