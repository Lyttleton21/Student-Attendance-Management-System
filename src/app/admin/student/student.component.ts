import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  allStudentList:any;

  constructor(private adminService:AdminService,
    private router:Router) { }

  ngOnInit(): void {
    this.adminService.getAllStudent()
    .subscribe((res) => {
      let response = res;
      this.allStudentList = response;
    });
  }

  /*toStudentDetails(){
    let data = {
      id:this.allStudentList.id
    }
    this.adminService.getOneStudent(data)
    .subscribe((res) => {
      if(res.status == 200){
        this.router.navigate(['admin/all_student/student/', this.allStudentList.firstName]);
      }
    });
    
  }*/

}
