import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { LoginDetailsService } from 'src/app/service/login-details.service';
import { StudentService } from 'src/app/service/student.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  studentdetails!: any;
  firstName!: string;
  lastName!: string;
  faculty!: string;
  department!: string;

  checked: boolean = false;

  constructor(private loginDetailsService:LoginDetailsService,
    private studentService:StudentService,
    private router:Router,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.studentdetails = this.loginDetailsService.getLoginDetails();
    //console.log(this.studentdetails);
  } 

  changeChecked(){
    this.checked = !this.checked;
  }

  markAttendance(){
    var month =  new Date().getMonth() + 1;
   let data = {
    firstName:this.studentdetails.RESULT.firstName,
    lastName:this.studentdetails.RESULT.lastName,
    faculty:this.studentdetails.RESULT.faculty,
    department:this.studentdetails.RESULT.department,
    date:(new Date().getFullYear() +'-'+ month +'-'+  new Date().getDate())
   }
   this.studentService.markAttendance(data).subscribe((response) => {
    if(response.status == 200){
      alert(response.message);
    }else{
      alert(response.message);
    }
   });
   
  }
  logOut(){
    this.loginDetailsService.logUserOut();
    this.authService.logout();
    this.router.navigate(['home']);
  }
 
}

