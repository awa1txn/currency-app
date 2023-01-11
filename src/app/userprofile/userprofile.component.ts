import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { AppComponent } from '../app.component'
import { Router, ActivatedRoute} from '@angular/router';
import {Chart, ChartConfiguration, ChartItem, registerables} from 'node_modules/chart.js';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss', "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css" ]
})
export class UserprofileComponent implements OnInit {
  data: any;
  users: object | undefined;
  constructor(private us: UserService, private ac:AppComponent, private router: Router, private route: ActivatedRoute) { }

  walletRedirect():void{
    this.router.navigate(['wallet'])
  }
  settingsRedirect():void{
    this.router.navigate(['settings'])
  }
  overviewRedirect():void{
    this.router.navigate(['topup'])
  }


 ngOnInit(): void {
    this.createChart()
    this.data = this.route.data
    this.us.LoggedInNavBar()
    if(localStorage.getItem('loggedIn') == '1'){
    Promise.resolve().then(()=>{this.ac._$isLogged = true;})
  }
    // this.us.getUser(this.userId).subscribe({next: data =>{
    //   this.users = data;
    //   Promise.resolve().then(()=>{console.log(this.users)})
    // }})
    
  }


  createChart(): void {
    Chart.register(...registerables);
    const chartItem: ChartItem = document.getElementById('my-chart-u') as ChartItem;
    new Chart(chartItem, this.config);
  }
  chartData = {
    labels: ['00:00','00:30','01:00','01:30','02:00', '02:30', '03:00', '03:30', '04:00', '04:30'],
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
    },
    {
      label: 'Dollar',
      backgroundColor: '#85bb65',
      borderColor: '#85bb65',
      data: [20, -94, 49, -89, 18, -20, -100, -50, -23, -50],
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
    data: this.chartData,
    options: this.options
  }

}
