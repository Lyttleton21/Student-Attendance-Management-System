import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  faculty!: string
  firstName!: string
  lastName!: string
  email!: string
  department!: string
  state!:string
  gender!: string
  password!: string
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Faculty:",this.faculty, 
    "firstName:",this.firstName, 
    "lastName:",this.lastName, 
    "Password:",this.password,  
    "Email:",this.email,    
    "Gender:",this.gender,  
    "State:",this.state,  
    "Department:",this.department)
  }

}
