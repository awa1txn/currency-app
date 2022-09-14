import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged-header',
  templateUrl: './logged-header.component.html',
  styleUrls: ['./logged-header.component.scss', "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css" ]
})
export class LoggedHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logout():void {
    localStorage.clear();
    window.location.reload();
  }
}
