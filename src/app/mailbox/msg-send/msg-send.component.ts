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
      let userId;
      this.data = res; this.data.find((el: { email: any; id:any})=>{el.email == this.sendMail.value.email? userId = el.id : ""})
      this.us.SendMail(userId, this.sendMail.value).subscribe(res=>{console.log(res);this.router.navigate(['mailbox'])})
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