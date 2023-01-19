import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
  })
export class isAdmin implements CanActivate {
    data:any;
    roleType:string | undefined;
 
    constructor(private router:Router, private us:UserService) {
 
    }
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
    if (this.us.isAdmin()) {
        return true;
    } 
    return false;
    
    }


}