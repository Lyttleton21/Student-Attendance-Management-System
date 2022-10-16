import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { LoginDetailsService } from 'src/app/service/login-details.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth:AuthService,
    private loginService:LoginDetailsService,
    private router:Router) { }

  ngOnInit(): void {
  }

  logOutBtn(){
    this.loginService.logUserOut();
    this.auth.logout();
    this.router.navigate(['home']);
  }
}
