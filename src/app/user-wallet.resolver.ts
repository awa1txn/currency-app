import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable} from 'rxjs';
import { UserService } from './user.service';
@Injectable({
    providedIn: "root"
  })
export class UserWalletResolver implements Resolve<any> {
  constructor(private user: UserService) {}

  resolve(    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.user.getUser(localStorage.getItem('your_id'))
  }
}