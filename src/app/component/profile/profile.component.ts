import { Component, OnInit } from '@angular/core';
import { LoginDetailsService } from 'src/app/service/login-details.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  studentdetails!: any;

  constructor(private loginDetailsService:LoginDetailsService) { }

  ngOnInit(): void {
    this.studentdetails = this.loginDetailsService.getLoginDetails();
  } 

}
