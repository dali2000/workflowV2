import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
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

  token: any;
  data: any;
  user: any;
  test = true
  tasks: any;
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.data = jwtDecode(this.token);
    this.user = this.data.user;
    console.log(this.user);

    if (this.user.role == "user") {
      this.test = false
    }
    this.getMyUserTasks()
  }

  t1 :any
  id:any;
  ToDo: any = []
  t = 0;
  InProgress: any = []
  j = 0;
  Completed: any = []
  c = 0;
  Reopened: any = []
  r = 0;

  l = 0
  len = 0
  drop(event: CdkDragDrop<string[]>, id: number) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex = id,

      );
      console.log(event.container.data)
      this.updateTask(event.currentIndex)
    }


    console.log(event.currentIndex)

  }


  getMyUserTasks() {
    this.http.get("http://localhost:3000/task/getTasks/" + this.user.id).subscribe(res => {
      this.tasks = res
      this.l = this.tasks.length

      // console.log(this.tasks)
      for (let i = 0; i < this.l; i++) {
        if (this.tasks[i].statut == "ToDo"  && this.tasks[i].valid == false) {
          this.ToDo[this.t] = this.tasks[i]
          this.t++
          this.len++
        }
        else if (this.tasks[i].statut == "InProgress"  && this.tasks[i].valid == false) {
          this.InProgress[this.j] = this.tasks[i]
          this.j++
          this.len++
        }
        else if (this.tasks[i].statut == "Completed" && this.tasks[i].valid == false) {
          this.Completed[this.c] = this.tasks[i]
          this.c++
          this.len++
        }
        else if(this.tasks[i].statut == "ReOpened" && this.tasks[i].valid == false){
          this.Reopened[this.r] = this.tasks[i]
          this.r++
          this.len++
        }


      }
    })

    console.log(this.len)
  }

  get(id:number){
    console.log("http://localhost:3000/task/getTask/"+id)
    this.http.get("http://localhost:3000/task/getTask/"+id).subscribe(res=>{
      this.t1 = res
      console.log(this.t1)
    })

  }

  updateTask(id: number) {
    switch (id) {
      case 0: {
        this.t1.statut = "ToDo";
        break;
      }
      case 1: {
        this.t1.statut = "InProgress"
        break;
      }
      case 2: {
        this.t1.statut = "Completed"
        break;
      }
      default: {
        this.t1.statut = "ReOpened"
        break;
      }
    }


    console.log(this.t1)

    this.http.put("http://localhost:3000/task/updateTask/"+this.t1.id,this.t1).subscribe(res => {
      console.log(res)
    })
    // this.getMyUserTasks()
  }


}
