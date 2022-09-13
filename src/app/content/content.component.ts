import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  static userForm: any;
  
  constructor(private us: UserService) {}
  hello_user: any = null;
  hello_user_state = false;
  

  ngOnInit(): void {
    this.hello_user = this.us.nickname == null ? localStorage.getItem("your_name") : this.us.nickname
    this.hello_user_state = localStorage.getItem("your_name") == null ? false : true;
  }

}
