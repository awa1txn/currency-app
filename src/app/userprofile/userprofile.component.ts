import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { AppComponent } from '../app.component'
import { Router, ActivatedRoute} from '@angular/router';

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
    this.router.navigate(['overview'])
  }


 ngOnInit(): void {
    this.data = this.route.data
    console.log(this.data)
    this.us.LoggedInNavBar()
    if(localStorage.getItem('loggedIn') == '1'){
    Promise.resolve().then(()=>{this.ac._$isLogged = true;})
  }
    // this.us.getUser(this.userId).subscribe({next: data =>{
    //   this.users = data;
    //   Promise.resolve().then(()=>{console.log(this.users)})
    // }})
    
  }
}
