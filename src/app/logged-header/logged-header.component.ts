import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-header',
  templateUrl: './logged-header.component.html',
  styleUrls: ['./logged-header.component.scss', "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css" ]
})
export class LoggedHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout():void {
    localStorage.clear();
    setTimeout(() => {
      window.location.reload()
    }, 500);
  }
}
