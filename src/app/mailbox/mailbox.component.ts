import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss']
})
export class MailboxComponent implements OnInit {

  constructor(private us: UserService, private ac: AppComponent) { }

  ngOnInit(): void {
    Promise.resolve().then(() => {
      if(localStorage.getItem('loggedIn') == null) {
        if(this.us.nickname != null){
          this.ac._$isLogged = this.us._$loggedIn;
          localStorage.setItem('loggedIn', '1');
        }
      }
      if(localStorage.getItem('loggedIn') == '1'){
        this.ac._$isLogged = true;
      }
    })
  }

}
