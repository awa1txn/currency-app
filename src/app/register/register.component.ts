import { Component, OnInit } from '@angular/core';

import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm = this.fb.group({
    nickname: ['', Validators.required],
    moneytype: [''],
    amount: ['']
  });

  showUserData = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  
}
