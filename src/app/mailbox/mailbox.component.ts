import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { AppComponent } from '../app.component'
import { Router} from '@angular/router';

export interface PeriodicElement {
  name: string;
  weight: string;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Hydrogen', weight: "Lorem Ipsum is simply dummy", date: '10/30/2022'},
  { name: 'Helium', weight: "Lorem Ipsum is simply dummy", date: '10/30/2022'},
  { name: 'Lithium', weight: "Lorem Ipsum is simply dummyLorem Ipsum is simply dummy", date: '10/30/2022'},
  { name: 'Beryllium', weight: "Lorem Ipsum is simply dummy", date: '10/30/2022'},
  { name: 'Boron', weight: "Lorem Ipsum is simply dummyLorem Ipsum is ", date: '10/30/2022'},
  { name: 'Carbon', weight: "Lorem Ipsum is simply dummy", date: '10/30/2022'},
  { name: 'Nitrogen', weight: "Lorem Ipsum is simply dummy", date: '10/30/2022'},
  { name: 'Oxygen', weight: "Lorem Ipsum is simply dummy", date: '10/30/2022'},
  { name: 'Fluorine', weight: "Lorem Ipsum is simply dummyLorem Ipsum is simply dummy", date: '10/30/2022'},
  { name: 'Neon', weight: "Lorem Ipsum is simply dummy", date: '10/30/2022'},
];


@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss', "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css" ]
})
export class MailboxComponent implements OnInit {
  displayedColumns: string[] = ['name', 'weight', 'date'];
  dataSource = ELEMENT_DATA;

  constructor(private us: UserService, private ac:AppComponent, private router: Router) { }

  ngOnInit(): void {
    
    this.us.LoggedInNavBar()
    if(localStorage.getItem('loggedIn') == '1'){
    Promise.resolve().then(()=>{this.ac._$isLogged = true;})
  }
  }
}
