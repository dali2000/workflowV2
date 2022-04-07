import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-statestiqueworkflow',
  templateUrl: './statestiqueworkflow.component.html',
  styleUrls: ['./statestiqueworkflow.component.css']
})
export class StatestiqueworkflowComponent implements OnInit {

  constructor() { Chart.register(...registerables)}

  ngOnInit(): void {
    

    const myChart = new Chart("myChart", {
      type: 'line',
      data: {
          
          datasets: [{
            data: [0, 2, 5, 4, 8, 10],
              label: 'namber of workflows',
              backgroundColor: '#007bff',
            },
            ],
                labels: ['17th', '18th', '19th', '20th', '21th', '22th'],

              
              
             
              
           
           
      },
     
  });
  }

}
