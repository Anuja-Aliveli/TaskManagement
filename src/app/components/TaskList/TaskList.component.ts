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
  globalFilters: any = ['status'];
  taskStatusCounts: any = [];
  statuses = [
    { label: 'Pending', value: 'pending' },
    { label: 'In Progress', value: 'in_progress' },
    { label: 'Done', value: 'done' },
  ];
  constructor(private router: Router, private taskService: TaskService) {}
  @ViewChild('dt') table?: Table;

  ngOnInit() {
    this.columns = [
      { fieldtype: 'data', label: 'Title', fieldname: 'title' },
      { fieldtype: 'data', label: 'Description', fieldname: 'description' },
      { fieldtype: 'data', label: 'Due date', fieldname: 'dueDate' },
      { fieldtype: 'data', label: 'status', fieldname: 'status' },
    ];
    this.taskService.getCurrentList().subscribe((lists) => {
      console.log('Current List in AnotherComponent:', lists);
      this.rowData = lists;
    });
    this.updateTaskStatusCounts();
  }

  onCreateTask() {
    this.router.navigate(['/tasks/create']);
  }

  onGlobalFilter() {
    this.table?.filterGlobal(this.searchInput, 'contains');
  }

  updateTaskStatusCounts() {
    const statusCounts: any = {
      Pending: 0,
      'In Progress': 0,
      Completed: 0,
    };

    this.rowData.forEach((task: any) => {
      const statusLabel = task.status?.label;
      if (statusLabel && statusCounts[statusLabel] !== undefined) {
        statusCounts[statusLabel]++;
      }
    });

    this.taskStatusCounts = [
      {
        cardText: 'Pending',
        cardIcon: 'pi pi-list',
        cardColor: 'orange',
        cardIconBackgroundColor: '#FFEB3B',
        cardCountValue: statusCounts['Pending'],
      },
      {
        cardText: 'In Progress',
        cardIcon: 'pi pi-hourglass',
        cardColor: 'blue',
        cardIconBackgroundColor: '#03A9F4',
        cardCountValue: statusCounts['In Progress'],
      },
      {
        cardText: 'Completed',
        cardIcon: 'pi pi-check-circle',
        cardColor: 'green',
        cardIconBackgroundColor: '#8BC34A',
        cardCountValue: statusCounts['Completed'],
      },
    ];
  }

  onEdit(task: any) {
    this.router.navigate(['/tasks/edit', task.rowId], { state: { task } });
  }

  onDelete(task: any) {
    console.log(task)
    this.taskService.deleteTask(task.rowId);
  }
}
