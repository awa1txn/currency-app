import { Component, OnInit } from '@angular/core';

import { Validators } from '@angular/forms';
import { UntypedFormBuilder } from '@angular/forms';
import { UserService } from '../user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  //[a-zA-Z]+[0-9] !@#\$%&\^\*

  unSamePassword: boolean | undefined = false;

  userForm: any = this.fb.group({
    nickname: ['', [Validators.required, Validators.pattern('[a-zA-Z]'), Validators.minLength(4), Validators.maxLength(12)]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z]+[0-9]')]],
    email: ['', [Validators.required, Validators.email]],
    repeatPassword: ['', Validators.required]
  });

  constructor(private fb: UntypedFormBuilder, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
  }

  async onSubmit(): Promise<void> {

    const { nickname, password, email, repeatPassword } = this.userForm.value;
    if (repeatPassword === password){
      Promise.resolve()
      .then(x => {
        this.userService.createUser(nickname, password, email, 'none', 0).subscribe({
          next: 
          data => {
            this.userForm = data;
            localStorage.setItem('your_id', this.userForm.id);
            console.log(this.userForm)
            this.router.navigate(['/'])
          }
        })
      })
    } else {
      this.unSamePassword = true;
    }

      
    
}
}
