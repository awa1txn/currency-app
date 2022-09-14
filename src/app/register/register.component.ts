import { Component, OnInit } from '@angular/core';

import { Validators } from '@angular/forms';
import { UntypedFormBuilder } from '@angular/forms';
import { UserService } from '../user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  

  userForm: any = this.fb.group({
    nickname: ['', Validators.required],
    amount: ['']
  });

  showUserData = false;
  constructor(private fb: UntypedFormBuilder, private userService: UserService) {}

  ngOnInit(): void {
  }

  onSubmit(): void {

    const { nickname, amount } = this.userForm.value;
    if (typeof(amount) == 'number'){
      this.userService.postContent(nickname, amount).subscribe({
        next: 
        data => {
          this.userForm = data;
          localStorage.setItem('your_id', this.userForm.id);
        }
      })
      localStorage.setItem('your_name', nickname);
      localStorage.setItem('your_amount', amount.toString());
      this.userService.nickname = nickname;
      this.userService.amount = amount
      this.userService._$loggedIn = true;
    } else {
      console.error("amount not is NUMBER!")
    }
}
}
