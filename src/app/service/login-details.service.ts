import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginDetailsService implements CanActivate{
loginDetails:any
logOut:any;

  constructor(private authService:AuthService,
    private router:Router) { }

  getLoginDetails(){
    this.loginDetails = JSON.parse(localStorage.getItem('login') || `{}`);
    return this.loginDetails;
  }

  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): boolean{
    if(this.authService.isAuthenticated()){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }

  logUserOut(){
    this.logOut = localStorage.removeItem('login');
    return this.logOut;
  }
}
