import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-entartaiment',
  templateUrl: './entartaiment.component.html',
  styleUrls: ['./entartaiment.component.scss']
})
export class EntartaimentComponent implements OnInit {

  constructor(private us: UserService, private ac:AppComponent) { }

  ngOnInit(): void {

    this.us.LoggedInNavBar()
    if(localStorage.getItem('loggedIn') == '1'){
    Promise.resolve().then(()=>{this.ac._$isLogged = true;})
  }
  }
}
