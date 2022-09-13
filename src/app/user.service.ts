import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


const API_URL = 'http://localhost:3000/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  nickname: any = null;
  amount: number = 0;
  _$loggedIn: boolean = false;

  postContent(nickname: string, amount: number): Observable<object> {
    return this.http.post<object>(API_URL + 'people', {
      nickname,
      amount
    }, httpOptions)
}
  getContent(e: number): Observable<object[]> {
    return this.http.get<object[]>(API_URL + `people/${e}`)
  }
  

}