import { Component, OnInit } from '@angular/core';
import { DropdownOptions, RowData, TaskDetails } from '../store/interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadTaskDetailsSuccess, loadTaskListSuccess } from '../store/actions';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { BehaviorSubject, Observable, of, switchMap, take } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { selectTaskDetails, selectTaskList } from '../store/selectors';
import { TaskService } from '../TaskService';

@Component({
  selector: 'app-TaskForm',
  templateUrl: './TaskForm.component.html',
  styleUrls: ['./TaskForm.component.css'],
  providers: [MessageService]

})

export class TaskFormComponent implements OnInit {
  initialForm: TaskDetails = {
    title: '',
    description: '',
    dueDate: null,
    status: '',
    priority: ''
  };
  priority: DropdownOptions[] = [];
  status: DropdownOptions[] = [];
  form: any;
  isSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.priority = [
      { label: 'Low', value: 'low' },
      { label: 'Medium', value: 'medium' },
      { label: 'High', value: 'high' },
    ];
    this.status = [
      { label: 'Pending', value: 'pending' },
      { label: 'In Progress', value: 'in-progress' },
      { label: 'Completed', value: 'completed' },
    ];
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      dueDate: [null, Validators.required],
      status: ['', Validators.required],
      priority: ['', Validators.required],
    });
  }

  onCreateTask() {
    this.isSubmitted = true;
    if (this.form.valid) {
      this.isSubmitted = false;
      const newTask: RowData = { ...this.form.value, rowId: Date.now() };
      this.taskService.addTask(newTask);
      this.router.navigate(['tasks/list']);
    }
  }

  onCancel() {
    this.router.navigate(['tasks/list']);
  }
}