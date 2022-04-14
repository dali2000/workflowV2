import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) { }
  id: any
  group: any
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");
      this.id = id

    });
    this.getGroup();
    this.getUserGroup();
    this.task.IdEnterprise=this.id
    this.task.userId=this.Users.id
   
    
  }

  Users: any

  getUserGroup() {
    this.http.get('http://localhost:3000/user/getByGroup/'+this.id).subscribe(res => {
      console.log(res)
      this.Users = res
    });
  }



  getGroup() {
    this.http.get('http://localhost:3000/group/getGroup/' + this.id).subscribe(res => {
      this.group = res
      console.log(res);
    });
  }

  task={
    Name:'',
    dueDate:'',
    userId:'',
    IdEnterprise:'',
  }
  
  addTask(){
    
    this.http.post('http://localhost:3000/task/addTask',this.task).subscribe(res => {
      this.group = res
      console.log(res);
    });
    console.log(this.task)
    
  }


  vide(){
    this.task.Name=''
    this.task.dueDate=''
    this.task.userId=''
    this.task.IdEnterprise=''
  }

}
