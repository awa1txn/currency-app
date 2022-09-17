import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {

  constructor(private us: UserService, private ac:AppComponent) { }

  ngOnInit(): void {
    
    this.us.LoggedInNavBar()
    if(localStorage.getItem('loggedIn') == '1'){
    Promise.resolve().then(()=>{this.ac._$isLogged = true;})

  }
  }
}
