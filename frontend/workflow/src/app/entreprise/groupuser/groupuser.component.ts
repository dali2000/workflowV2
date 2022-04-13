import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-groupuser',
  templateUrl: './groupuser.component.html',
  styleUrls: ['./groupuser.component.css']
})
export class GroupuserComponent implements OnInit {
  term: any;
  token: any;
  data: any;
  entreprise: any;
  group: any
  response: any;
  check = true

  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) { }

id: any
  ngOnInit(): void {
    
    this.token = localStorage.getItem('token');
    this.data = jwtDecode(this.token);
    this.entreprise = this.data.user;
    console.log(this.entreprise.id);
    this.getGroup();
    
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");
      this.id = id

    });
  }



  groups = {
    Name: '',
    Description: '',
    enterpriseId: '',
  }

  getGroup() {

    this.http.get('http://localhost:3000/group/getGroups/' + this.entreprise.id).subscribe(res => {
      console.log(res);
      this.group = res
    });
  }

  getGroupId() {

    this.http.get('http://localhost:3000/group/getGroups/'+this.id).subscribe(res => {
      console.log(res);
      this.group = res
    });
  }

  addGroup() {
    this.groups.enterpriseId = this.entreprise.id;
    this.http.post('http://localhost:3000/group/addGroup', this.groups).subscribe(res => {
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
    console.log(this.groups);

  }

  deleteGroup(id: any) {
    this.http.delete("http://localhost:3000/group/deleteGroup/" + id).subscribe(res => {
      console.log(res)
    })
    this.ngOnInit()
    console.log(id)
  }


}

