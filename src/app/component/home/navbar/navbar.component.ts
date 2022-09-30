import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  isOnline(){
    this.login = !this.login;
    //console.log(this.login);
  }

}
