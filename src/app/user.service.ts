import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';


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
  SendMail(id:any, mail:object): Observable<object>{
    return this.http.patch(API_URL+'people/'+id, {mail}, httpOptions)
  }
  patchUserAvatar(id:string, avatar:string): Observable<object>{
    return this.http.patch(API_URL+'people/'+id, {avatar}, httpOptions)
  }
  getUserWallet(id:string): Observable<object>{
    return this.http.patch(API_URL+'people/'+id, httpOptions)
  }
  patchUserWallet(id:string, wallet:object): Observable<object>{
    return this.http.patch(API_URL+'people/'+id, {wallet}, httpOptions)
  }

  patchNewEmail(id:string, email:string): Observable<object>{
    return this.http.patch(API_URL+'people/'+id, {email}, httpOptions)
  }

  patchNewNickname(id:string, nickname:string): Observable<object>{
    return this.http.patch(API_URL+'people/'+id, {nickname}, httpOptions)
  }

  patchNewPassword(id:string, password:string): Observable<object> {
    return this.http.patch(API_URL+'people/'+id, {password}, httpOptions)
  }

  getYourPassword(id:string): Observable<object>{
    return this.http.get(API_URL+'people/'+id)
  }

  patchNewFavPhraseToUser(id:string, favPhrase:string): Observable<object> {
    return this.http.patch(API_URL+'people/'+id, {favPhrase}, httpOptions)
  }
  
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

  createUser(nickname: string, password: string, email: string, avatar: string, wallet: object[]): Observable<object> {
    return this.http.post<object>(API_URL + 'people', {
      nickname,
      password,
      email,
      avatar,
      wallet
    }, httpOptions)
}
   ContactToOwner(message:object): Observable<object> {
  return this.http.post<object>(API_URL + 'contactToOwner', message, httpOptions)
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