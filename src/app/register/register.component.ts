import { Component, OnInit } from '@angular/core';

import { Validators } from '@angular/forms';
import { UntypedFormBuilder } from '@angular/forms';
import { UserService } from '../user.service'
import { Router } from '@angular/router';
import { ConfirmPasswordValidator } from '../confirm-password.validator';
import { UserExistsValidator } from '../user-exists.validator';
import { EmailExistsValidator } from '../email-exists.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userExists: boolean | undefined;
  
  //[a-zA-Z]+[0-9] !@#\$%&\^\*
  constructor(private fb: UntypedFormBuilder, private userService: UserService, private router: Router) {}

  userForm: any = this.fb.group({
    nickname: ['', [Validators.required, Validators.pattern('^(?=.{4,12}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$'), Validators.minLength(4), Validators.maxLength(12)]],
    password: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
    email: ['', [Validators.required, Validators.email]],
    repeatPassword: ['', Validators.required]
  },
  {
    validator: [
      ConfirmPasswordValidator("password", "repeatPassword"),
      UserExistsValidator('nickname', this.userService.findUserByName()),
      EmailExistsValidator('email', this.userService.findUserByEmail())
    ]
  });

  ngOnInit(): void {
  }

  async onSubmit(): Promise<void> {
    const { nickname, password, email} = this.userForm.value;

      Promise.resolve()
      .then(x => {
        this.userService.createUser(nickname, password, email, 'none', 0).subscribe({
          next: 
          data => {
            this.userForm = data;
            localStorage.setItem('your_id', this.userForm.id);
            // console.log(this.userForm)
            this.router.navigate(['/'])
          }
        })
      })
    }
    
}

