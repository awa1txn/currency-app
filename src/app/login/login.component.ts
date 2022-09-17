import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { UntypedFormBuilder } from '@angular/forms';
import { UserService } from '../user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: UntypedFormBuilder, private us: UserService) { }
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
        console.log(this.users)
        for(let key in this.users){
          
          console.log(this.users[key].nickname.indexOf(nickname))
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
