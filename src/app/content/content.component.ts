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
    if(this.us.nickname == null){
      this.hello_user = localStorage.getItem("your_name")
    } else {
      this.hello_user = this.us.nickname
    };
    this.hello_user_state = localStorage.getItem("your_name") == null ? false : true;
  }

}
