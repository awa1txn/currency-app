import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  static userForm: any;
  
  constructor(private us: UserService, private ac: AppComponent) {}
  hello_user: any = null;
  hello_user_state = false;
  user_amount: any = '';
  user = {};
  users:any = [];


  wow(): void {

    this.us.getContent().subscribe({
      next:
      data => {
        console.log(data);
        this.users = data;
        this.users.forEach((el: any) => {
          if(el.nickname.includes('hello world')){
            console.log(true)
          }
        });
      }
    })



    // if (localStorage.getItem('your_id') != null){
    //   this.us.getContent(localStorage.getItem('your_id')).subscribe({
    //     next:
    //     data =>{
    //       this.user = data;
    //       console.log(this.user)
    //     }
    //   })
    // }else { console.log("you aren't logged in")}

  }

  ngOnInit(): void {
    this.hello_user = this.us.nickname == null ? localStorage.getItem("your_name") : this.us.nickname
    this.hello_user_state = localStorage.getItem("your_name") == null ? false : true;
    if(localStorage.getItem("your_amount") != 'string'){
      this.user_amount = localStorage.getItem("your_amount")
    } else {
      this.user_amount = this.us.amount
    }

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
