import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  admins:any;
  data:any
  token:any
  user:any
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.data = jwtDecode(this.token);
    this.user = this.data.user;
    console.log(this.user);





    this.getAllAdmin()
  }

  getAllAdmin() {
    this.http.get('http://localhost:3000/user/users').subscribe(res => {
      this.admins = res;
      console.log(res);
    });
  }
  deleteAdmin(id:any) {
    this.http.delete('http://localhost:3000/user/deleteUser/' + id).subscribe(res => {
      this.getAllAdmin();
      console.log(res)
    });
    
  }

}
