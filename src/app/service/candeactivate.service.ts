import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignUpComponent } from '../component/sign-up/sign-up.component';

@Injectable({
  providedIn: 'root'
})
export class CandeactivateService implements CanDeactivate<SignUpComponent>{

  constructor() { }
  canDeactivate(component: SignUpComponent, 
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, 
    nextState?: RouterStateSnapshot | undefined)
    : boolean{
    return component.canExist();
  }
}
