import { Component, OnInit } from '@angular/core';

import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm: any = this.fb.group({
    nickname: ['', Validators.required],
    moneytype: [''],
    amount: ['']
  });

  showUserData = false;
  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { nickname, moneytype, amount } = this.userForm.value;
    this.userService.postContent(nickname, moneytype, amount).subscribe({
      next: data => {
        console.log(data);
      }})
}
  
}
