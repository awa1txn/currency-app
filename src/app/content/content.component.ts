import { Component, OnInit } from '@angular/core'; 
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  static userForm: any;
  
  lolkek1: any;

  constructor() {}

  ngOnInit(): void {

  }
}
