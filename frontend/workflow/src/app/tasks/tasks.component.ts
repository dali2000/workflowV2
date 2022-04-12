import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

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


  ToDo :any = []
  t=0;
  InProgress:any = []
  j=0;
  Completed:any = []
  c=0;
  Reopened:any = []
  r=0;

  l=0

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }


  getMyUserTasks(){
    this.http.get("http://localhost:3000/task/getTasks/"+this.user.id).subscribe(res=>{
      this.tasks = res
      this.l =this.tasks.length
      // console.log(this.tasks)
      for(let i = 0;i<this.l;i++){
        if(this.tasks[i].statut == "ToDo"){
          this.ToDo[this.t] = this.tasks[i]
          this.t++
          console.log(this.tasks[i])
        }
        else if(this.tasks[i].statut == "InProgress"){
          this.InProgress[this.j] = this.tasks[i]
          this.j++
          console.log(this.tasks[i])
        }
        else if(this.tasks[i].statut == "Completed"){
          this.Completed[this.c] = this.tasks[i]
          this.c++
          console.log(this.tasks[i])
        }
        else{
          this.Reopened[this.r] = this.tasks[i]
          this.r++
          console.log(this.tasks[i])
        }


      }
    })


  }

}
