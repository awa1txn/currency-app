import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css" ]
})
export class HeaderComponent implements OnInit {

  constructor() { }
  isLogged = false;
  unLogged = true;
  ngOnInit(): void {
  }

}
