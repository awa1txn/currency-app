import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  data:any;

  constructor(private us: UserService, private ac:AppComponent) { }


  ngOnInit(): void {

    this.us.getNotifications().subscribe(res=>{
      this.data=res;
    })

    this.us.LoggedInNavBar()
    if(localStorage.getItem('loggedIn') == '1'){
    Promise.resolve().then(()=>{this.ac._$isLogged = true;})

  }
  }
}
