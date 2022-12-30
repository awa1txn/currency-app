import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, map } from 'rxjs';
import { UserService } from './user.service';
@Injectable()
export class UserResolver implements Resolve<any> {
  constructor(private user: UserService) {}

  resolve(    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.user.getUser(localStorage.getItem('your_id'))
  }
}
