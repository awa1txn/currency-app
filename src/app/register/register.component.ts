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
  

  userForm: any = this.fb.group({
    nickname: ['', Validators.required],
    password: ['']
  });

  constructor(private fb: UntypedFormBuilder, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
  }

  async onSubmit(): Promise<void> {

    const { nickname, password } = this.userForm.value;
      Promise.resolve()
      .then(x => {
        this.userService.postContent(nickname, password, 'none', 0).subscribe({
          next: 
          data => {
            this.userForm = data;
            localStorage.setItem('your_id', this.userForm.id);
            console.log(this.userForm)
            this.router.navigate(['/'])
          }
        })
      })

      
    
}
}
