import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-msg-send',
  templateUrl: './msg-send.component.html',
  styleUrls: ['./msg-send.component.scss']
})
export class MsgSendComponent implements OnInit {
  data:any;
  emailList: any;
  sendMail: any = this.fb.group({
    email: [''],
    subject: [''],
    message: [''],
  })

  constructor(private us: UserService, private ac:AppComponent, private fb: UntypedFormBuilder, private router:Router) { }

  sendingMail():void{
    this.us.getContent().subscribe(res=>{
      var userId: any;
      let recipentData = {
        ...this.sendMail.value
      }
      let output;
      this.data = res; this.data.find((el: { email: any; id:any})=>{el.email == this.sendMail.value.email? userId = el.id : "";})//find persond id by mail
      recipentData.email = localStorage.getItem('your_email');//equation for recipent
      recipentData.date = new Date().toString()
      this.data.find((el: {id:any})=>el.id == userId).mail.push(recipentData);//pushh data to recipent mail
      output = this.data.find((el: {id:any})=>el.id == userId).mail;
      this.us.SendMail(userId, output).subscribe(res=>{console.log(res)})//send message function
    })
    
    // this.us.SendMail(sendMail, id).subscribe(res=>{console.log(res);this.router.navigate(['/'])})
  }

  ngOnInit(): void {
    this.us.LoggedInNavBar()
    if(localStorage.getItem('loggedIn') == '1'){
    Promise.resolve().then(()=>{this.ac._$isLogged = true;})
  }

}
}