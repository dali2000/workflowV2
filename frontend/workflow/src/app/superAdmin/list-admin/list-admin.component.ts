import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  term: any;

  admins:any;
  data:any
  token:any
  user:any
  role="admin"
  list :any=[];
  j = 0;
  ngOnInit(): void {
    this.list = []
    this.token = localStorage.getItem('token');
    this.data = jwtDecode(this.token);
    this.user = this.data.user;
    console.log(this.user);

    this.getAllAdmin()
  }

  getAllAdmin() {

    this.list = []
    this.http.get('http://localhost:3000/user/getAdmins/admin').subscribe(res => {
      console.log(res)
      this.admins = res

    });

  }
  deleteAdmin(id:any) {
    this.http.delete('http://localhost:3000/user/deleteUser/' + id).subscribe(res => {
      console.log(res)

      this.ngOnInit()
    });

  }

}
