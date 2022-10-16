import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggin: boolean = false;

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }


  isOnline(){
    if(this.auth.isAuthenticated()){
      this.isLoggin = true;
    }else{
      this.isLoggin = false;
    }
  }

}
