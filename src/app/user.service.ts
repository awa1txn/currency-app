import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppComponent } from './app.component'
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
  constructor(private http: HttpClient, private ac: AppComponent) { }
  _$loggedIn: boolean = false;

  postContent(nickname: string, password: string): Observable<object> {
    return this.http.post<object>(API_URL + 'people', {
      nickname,
      password
    }, httpOptions)
}
  getContent(): Observable<object> {
    return this.http.get<object>(API_URL + `people/`)
  }

  LoggedInNavBar(): void {

      if(localStorage.getItem('loggedIn') == null) {
        if(localStorage.getItem('your_id') != null){
          localStorage.setItem('loggedIn', '1');
        }
      }
  }
  

}