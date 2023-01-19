import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, UntypedFormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  data:any;

  sendNotif: any = this.fb.group({
    topic: [''],
    message: ['']
  })

  constructor(private us: UserService, private ac:AppComponent, private fb: UntypedFormBuilder, private router: Router) { }

  sendNotification():void{
    this.us.notificationPost(this.sendNotif.value).subscribe(res=>{
      console.log(res); window.location.reload();
    })
  }

  ngOnInit(): void {
    this.us.LoggedInNavBar()
    if(localStorage.getItem('loggedIn') == '1'){
    Promise.resolve().then(()=>{this.ac._$isLogged = true;})
  }
  }
  

}
