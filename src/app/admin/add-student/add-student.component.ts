import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  faculty!: string
  firstName!: string
  lastName!: string
  email!: string
  department!: string
  state!:string
  gender!: string
  password!: string

  constructor(private adminService:AdminService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let data ={
      firstName:this.firstName,
      lastName:this.lastName,
      email:this.email,
      password:this.password,
      faculty:this.faculty,
      department:this.department,
      gender:this.gender,
      state:this.state
    }
    this.adminService.createAccountForStudent(data)
    .subscribe((response) => {
      if(response.status == 200){
        alert(response.message);
        this.router.navigate(['admin']);
      }else{
        alert(response.message);
      }
    });
  }

}
