import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { UserService } from '../user.service'
import { AppComponent } from '../app.component'

interface Purpose {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);



  purposes: Purpose[] = [
    {value: '0', viewValue: 'Product question(New customer)'},
    {value: '1', viewValue: 'Feedback'},
    {value: '2', viewValue: 'Advertising'},
  ];

  constructor(private us: UserService, private ac:AppComponent) { }

  ngOnInit(): void {

    this.us.LoggedInNavBar()
    if(localStorage.getItem('loggedIn') == '1'){
    Promise.resolve().then(()=>{this.ac._$isLogged = true;})
  }
  }
}
