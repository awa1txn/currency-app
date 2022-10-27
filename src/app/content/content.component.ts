import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AppComponent } from '../app.component';
import {Chart, ChartConfiguration, ChartItem, registerables, Tooltip} from 'node_modules/chart.js';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss', "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css" ]
})



export class ContentComponent implements OnInit {
  static userForm: any;
  
  constructor(private us: UserService, private ac:AppComponent) {}

  ngOnInit(): void {
    this.createChart()
    this.us.LoggedInNavBar()
    if(localStorage.getItem('loggedIn') == '1'){
    Promise.resolve().then(()=>{this.ac._$isLogged = true;})
  }
  }
  createChart(): void {
    Chart.register(...registerables);
    const chartItem: ChartItem = document.getElementById('my-chart') as ChartItem;
    new Chart(chartItem, this.config);
  }
  data = {
    labels: ['January','February','March','April','May', 'June', 'Jule', 'August', 'September', 'November'],
    datasets: [{
      label: 'Bitcoin',
      backgroundColor: '#f2a900',
      borderColor: '#f2a900',
      data: [10, 25, 4, 70, 30, 45, 1, 100, 50, 23],
    },
    {
      label: 'Euro',
      backgroundColor: '#5D7EA7',
      borderColor: '#5D7EA7',
      data: [-20, 94, -49, 89, -18, 20, 100, 50, 23, 50],
    }
  ]
  };
  options = {
    scales: {
      y: {
        beginAtZero: true,
        display: false
      }
    }
  }
  config: ChartConfiguration = {
    type: 'line',
    data: this.data,
    options: this.options
  }

}

