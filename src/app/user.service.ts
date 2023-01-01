import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ContentComponent } from './content/content.component'
import { catchError, retry } from 'rxjs/operators';


const API_URL = 'http://localhost:3000/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:any = {};
  userList:any = []
  emailList:any = []

  constructor(private http: HttpClient) { }
  _$loggedIn: boolean = false;
  
  findUserByEmail(): Promise<Observable<object>> {
    this.getContent().subscribe({next: data=>{
        this.users = data;
        // console.log(this.users)
        var iterator = this.users.values()
        for(const values of iterator){
          this.emailList.push(values.email.toLowerCase());
        }
      }});
      return this.emailList;
    }
 findUserByName(): Promise<Observable<object>> {
  this.getContent().subscribe({next: data=>{
      this.users = data;
      // console.log(this.users)
      var iterator = this.users.values()
      for(const values of iterator){
        this.userList.push(values.nickname.toLowerCase());
      }
    }});
    return this.userList;
  }
  createUser(nickname: string, password: string, email: string, avatar: string, balance: number): Observable<object> {
    return this.http.post<object>(API_URL + 'people', {
      nickname,
      password,
      email,
      avatar,
      balance
    }, httpOptions)
}
  getContent(): Observable<object> {
    return this.http.get<object>(API_URL + `people/`)
  }
  getUser(userId:any): Observable<object> {
    return this.http.get<object>(API_URL + `people/${userId}`)
  }

  LoggedInNavBar(): void {

      if(localStorage.getItem('loggedIn') == null) {
        if(localStorage.getItem('your_id') != null){
          localStorage.setItem('loggedIn', '1');
        }
      }
  }
  

}