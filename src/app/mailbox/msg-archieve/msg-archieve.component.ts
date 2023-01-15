import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/user.service';

export interface PeriodicElement {
  username: string;
  description: string;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { username: 'Hydrogen', description: "Lorem Ipsum is simply dummy", date: '10/30/2022'},
  { username: 'Helium', description: "Lorem Ipsum is simply dummy", date: '10/30/2022'},
  { username: 'Lithium', description: "Lorem Ipsum is simply dummyLorem Ipsum is simply dummy", date: '10/30/2022'},
  { username: 'Beryllium', description: "Lorem Ipsum is simply dummy", date: '10/30/2022'},
  { username: 'Boron', description: "Lorem Ipsum is simply dummyLorem Ipsum is ", date: '10/30/2022'},
  { username: 'Carbon', description: "Lorem Ipsum is simply dummy", date: '10/30/2022'},
  { username: 'Nitrogen', description: "Lorem Ipsum is simply dummy", date: '10/30/2022'},
  { username: 'Oxygen', description: "Lorem Ipsum is simply dummy", date: '10/30/2022'},
  { username: 'Fluorine', description: "Lorem Ipsum is simply dummyLorem Ipsum is simply dummy", date: '10/30/2022'},
  { username: 'Neon', description: "Lorem Ipsum is simply dummy", date: '10/30/2022'},
];

@Component({
  selector: 'app-msg-archieve',
  templateUrl: './msg-archieve.component.html',
  styleUrls: ['./msg-archieve.component.scss']
})
export class MsgArchieveComponent implements OnInit {
  displayedColumns: string[] = ['name', 'weight', 'date'];
  dataSource = ELEMENT_DATA;

  constructor(private us: UserService, private ac:AppComponent) { }

  ngOnInit(): void {
    this.us.LoggedInNavBar()
    if(localStorage.getItem('loggedIn') == '1'){
    Promise.resolve().then(()=>{this.ac._$isLogged = true;})
  }
  }

}
