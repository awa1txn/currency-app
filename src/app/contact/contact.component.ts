import { Component, OnInit } from '@angular/core';
import {FormControl, UntypedFormBuilder, Validators} from '@angular/forms';
import { UserService } from '../user.service'
import { AppComponent } from '../app.component'
import { Router } from '@angular/router';

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
  
  purposeValue: string | undefined;

  contactSign1: any = this.fb.group({
    name: [''],
    email: [''],
  })
  contactSign2: any = this.fb.group({
    subject: [''],
    message: [''],
  })


  purposes: Purpose[] = [
    {value: '0', viewValue: 'Product question(New customer)'},
    {value: '1', viewValue: 'Feedback'},
    {value: '2', viewValue: 'Advertising'},
  ];

  constructor(private us: UserService, private ac:AppComponent, private fb: UntypedFormBuilder, private router:Router) {  }

  signContact():void{
    let contact = {
      ...this.contactSign1.value,
      purpose: this.purposeValue,
      ...this.contactSign2.value
    }
  console.log(contact)
  this.us.ContactToOwner(contact).subscribe(res=>{console.log(res);this.router.navigate(['/'])})
  }

  ngOnInit(): void {

    this.us.LoggedInNavBar()
    if(localStorage.getItem('loggedIn') == '1'){
    Promise.resolve().then(()=>{this.ac._$isLogged = true;})
  }
  }
}
