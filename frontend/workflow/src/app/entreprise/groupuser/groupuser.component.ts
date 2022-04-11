import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-groupuser',
  templateUrl: './groupuser.component.html',
  styleUrls: ['./groupuser.component.css']
})
export class GroupuserComponent implements OnInit {
  term:any;
  token :any;
  data :any;
  entreprise :any;
  group:any
  response: any;
  check = true

  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit(): void {
    this.token= localStorage.getItem('token');
    this.data = jwtDecode(this.token);
    this.entreprise = this.data.user;
   console.log(this.entreprise.id);
    this.getGroup();
    
  }
  


  groups={
    Name:'',
    Description:'',
    EnterpriseId:'',
  }
  
  getGroup(){
    
    this.http.get('http://localhost:3000/group/getGroups/'+this.entreprise.id).subscribe(res=>{
      console.log(res);
      this.group= res
    

    
    });
  }

  addGroup(){
    this.groups.EnterpriseId=this.entreprise.id;
    console.log(this.groups);
   this.http.post('http://localhost:3000/group/addGroup',this.groups).subscribe(res => {
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
  }

}
