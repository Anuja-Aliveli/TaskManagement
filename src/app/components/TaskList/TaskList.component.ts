import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { TaskService } from '../TaskService';

@Component({
  selector: 'app-TaskList',
  templateUrl: './TaskList.component.html',
  styleUrls: ['./TaskList.component.css'],
})
export class TaskListComponent implements OnInit {
  rowData: any;
  columns: any;
  searchInput: string = '';
  globalFilters: any = [];
  taskStatusCounts: any = [];
  constructor(private router: Router, private taskService: TaskService) { }
  @ViewChild('dt') table?: Table;

  ngOnInit() {
    this.taskStatusCounts = [
      {
        cardText: 'Pending',
        cardIcon: 'pi pi-list',
        cardColor: 'orange',
        cardIconBackgroundColor: '#FFEB3B',
        cardCountValue: 5,
      },
      {
        cardText: 'In Progress',
        cardIcon: 'pi pi-hourglass',
        cardColor: 'blue',
        cardIconBackgroundColor: '#03A9F4',
        cardCountValue: 10,
      },
      {
        cardText: 'Completed',
        cardIcon: 'pi pi-check-circle',
        cardColor: 'green',
        cardIconBackgroundColor: '#8BC34A',
        cardCountValue: 15,
      },
    ];

    this.columns = [
      { fieldtype: 'data', label: 'Title', fieldname: 'title' },
      { fieldtype: 'data', label: 'Description', fieldname: 'description' },
      { fieldtype: 'data', label: 'Category', fieldname: 'category' },
      { fieldtype: 'data', label: 'Quantity', fieldname: 'quantity' },
    ];
    this.globalFilters = this.columns.map((col: any) => col.label);
    this.taskService.getCurrentList().subscribe(list => {
      console.log('Current List in AnotherComponent:', list);
      this.rowData = list;
    });
  }

  onCreateTask() {
    this.router.navigate(['/tasks/create']);
  }

  onGlobalFilter() {
    this.table?.filterGlobal(this.searchInput, 'contains');
  }
}
