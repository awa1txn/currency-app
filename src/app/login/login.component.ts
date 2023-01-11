import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { UntypedFormBuilder } from '@angular/forms';
import { UserService } from '../user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: UntypedFormBuilder, private us: UserService, private router: Router) { }
  users: any = {};

  userForm: any = this.fb.group({
    nickname: ['', Validators.required],
    password: ['']
  });
  onSubmit(): void {
    const { nickname, password } = this.userForm.value;

    this.us.getContent().subscribe({
      next:
      data =>{
        this.users = data;
        if(this.users.find((user: { nickname: string;}) => user.nickname === nickname)){
          if(this.users.find((user: { password: string}) => user.password === password)){
            console.log("succesful login")
            console.log(this.users.find((user: { nickname: string;}) => user.nickname === nickname).id)
            localStorage.setItem('your_id', this.users.find((user: { nickname: string;}) => user.nickname === nickname).id.toString());
            localStorage.setItem('your_nickname', this.users.find((user: { nickname: string;}) => user.nickname === nickname).nickname.toString());
            this.router.navigate(['/'])
          } else {
            console.log('unsuccesful login')
          }
        } else {
          console.log('unsuccesful login')
        }
        
      }
    })
    
    // setTimeout(()=>{
    //   this.users.forEach((element: any) => {
    //     if(element.nickname.includes(nickname)){
            
    //     }
    //   });
    // }, 3000)
  }
  ngOnInit(): void {
  }

}
