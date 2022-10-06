import { Component, OnInit } from '@angular/core';
import { finalize, Subject, takeUntil } from 'rxjs';
import { Attendance } from '../models/attendance_list';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.css']
})
export class AttendanceListComponent implements OnInit {
  attendance_list!: any;

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllAttendance()
    .subscribe((res) => {
      let response = res;
      this.attendance_list = response;
      //console.log(this.attendance_list);
    });
  }

  filterDate:string = '';
  onFilterTextEnter(data:string){
    this.filterDate = data;
  }
}
