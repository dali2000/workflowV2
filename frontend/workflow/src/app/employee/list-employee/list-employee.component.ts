import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getAllEmployees()
  }

  employee:any;

  getAllEmployees() {
    this.http.get('http://localhost:3000/user/users').subscribe(res => {
      this.employee = res;
      console.log(res);
    });
  }
  deleteEmployee(id:any) {
    this.http.delete('http://localhost:3000/user/deleteUser/' + id).subscribe(res => {
      this.getAllEmployees();
      console.log(res)
    });
    
  }
}
