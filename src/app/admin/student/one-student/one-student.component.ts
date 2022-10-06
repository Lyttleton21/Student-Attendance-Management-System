import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-one-student',
  templateUrl: './one-student.component.html',
  styleUrls: ['./one-student.component.css']
})
export class OneStudentComponent implements OnInit, OnDestroy {
  student:any;
  routeParamObserable: any;
  data$: any;

  constructor(private adminService:AdminService,
    private activatedroute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
  this.routeParamObserable = this.activatedroute.paramMap
    .subscribe(params => {
      this.data$ = params.get('id');
    });
    
    let data = {
      id:this.data$
    }
    //console.log(data);
    this.adminService.getOneStudent(data)
    .subscribe((res) => {
      let response = res;
      this.student = response;
      //console.log(this.student);
    });
  }

  ngOnDestroy(): void {
    this.routeParamObserable.unSubscribe;
  }

}


