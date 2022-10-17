import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class AdminFilterComponent implements OnInit {
  enterFilterValue!: string;


  constructor() { }

  ngOnInit(): void {
  }

@Output()
filterChange = new EventEmitter<string>();

filterValueChange(){
  this.filterChange.emit(this.enterFilterValue);
  //console.log(this.enterFilterValue);
}

}
