import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-TaskForm',
  templateUrl: './TaskForm.component.html',
  styleUrls: ['./TaskForm.component.css']
})
export class TaskFormComponent implements OnInit {

  cities: any = [];
  temp: any;

  constructor() { }

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

}
