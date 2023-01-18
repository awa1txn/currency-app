import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { AppComponent } from '../app.component'
import { Router} from '@angular/router';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss', "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css" ]
})
export class MailboxComponent implements OnInit {
  data:any;
  displayedColumns: string[] = ['email', 'subject', 'message', 'date'];
  dataSource:any;


  constructor(private us: UserService, private ac:AppComponent, private router: Router) { }

  ngOnInit(): void {
    this.us.getContent().subscribe(res=>{this.data=res;
      this.dataSource =this.data.find((el: {id:any})=>el.id == localStorage.getItem('your_id')).mail
      });
    
    this.us.LoggedInNavBar()
    if(localStorage.getItem('loggedIn') == '1'){
    Promise.resolve().then(()=>{this.ac._$isLogged = true;})
  }
  }
}
