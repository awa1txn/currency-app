import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'currency-app';
  constructor() {}


  _$isLogged = false;

  ngOnInit(): void {
    
  }
}
