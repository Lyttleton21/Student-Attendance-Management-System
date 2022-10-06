import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
email!: string;
password!: string;

  constructor(private adminService:AdminService,
    private router: Router,
    private authService:AuthService
    ) { }

  ngOnInit(): void {
  }


  login(){
    let data = {
      email:this.email,
      password:this.password
    }
    this.adminService.login(data).subscribe((res) => {
      if(res.status == 200){
        alert(res.message);
        this.authService.login();
        this.router.navigate(['admin']);
      }
      else{
        alert(res.message);
        this.authService.logout();
      }
    });
  }
}
