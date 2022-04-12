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
  data2:any;
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


    this.http.get('http://localhost:3000/user/getAdmins/admin').subscribe(res => {
      console.log(res)
      this.data = res
      this.admins = this.data.admins
      console.log(this.admins)

    });

  }
  deleteAdmin(id:any) {
    this.http.delete('http://localhost:3000/user/deleteUser/' + id).subscribe(res => {
      console.log(res)

      this.ngOnInit()
    });

  }

}
