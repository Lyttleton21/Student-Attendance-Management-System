import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor(private router:Router,
    public authService:AuthService) { }

  ngOnInit(): void {
  }

  toHome(){
    this.router.navigate(['home']);
  }

  toAdminHome(){
    this.router.navigate(['admin']);
  }

  toSignUp(){
    this.router.navigate(['admin/sign-up']);
  }

  toAttendance_list(){
    this.router.navigate(['admin/attendance_list']);
  }

  toLogin(){
    this.router.navigate(['admin/login']);
  }

  toAdd_student(){
    this.router.navigate(['admin/add_student']);
  }

  toAllStudent(){
    this.router.navigate(['admin/all_student']);
  }

  logOutBtn(){
    window.location.reload();
    this.router.navigate(['home']);
  }

}
