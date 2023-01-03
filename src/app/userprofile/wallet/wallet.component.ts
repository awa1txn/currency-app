import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service'
import { AppComponent } from '../../app.component'
import { ActivatedRoute } from '@angular/router';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss', "../../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css" ]
})
export class WalletComponent implements OnInit {

  data: any;

  constructor(private us: UserService, private ac:AppComponent, private route: ActivatedRoute) { }

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];

  

  ngOnInit(): void {
    this.data = this.route.data
    console.log(this.data)
    this.us.LoggedInNavBar()
    if(localStorage.getItem('loggedIn') == '1'){
    Promise.resolve().then(()=>{this.ac._$isLogged = true;})
  }
  }

}
