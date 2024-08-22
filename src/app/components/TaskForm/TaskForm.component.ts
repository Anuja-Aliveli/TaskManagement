import { Component, OnInit } from '@angular/core';
import { DropdownOptions, RowData, TaskDetails } from '../store/interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TaskService } from '../TaskService';

@Component({
  selector: 'app-TaskForm',
  templateUrl: './TaskForm.component.html',
  styleUrls: ['./TaskForm.component.css'],
  providers: [MessageService]
})
export class TaskFormComponent implements OnInit {
  form!: FormGroup;
  isSubmitted: boolean = false;
  priority: DropdownOptions[] = [];
  status: DropdownOptions[] = [];
  isEditMode: boolean = false;
  taskId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.initDropdowns();
    this.initForm();
    this.checkEditMode();
  }

  initDropdowns() {
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
  }

  initForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: [null, Validators.required],
      status: ['', Validators.required],
      priority: ['', Validators.required],
    });
  }

  checkEditMode() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.taskId = +params['id'];
        this.loadTaskData(this.taskId);
      }
    });
  }

  loadTaskData(taskId: number) {
    const task = this.taskService.getTaskById(taskId);
    if (task) {
      this.form.patchValue({
        ...task,
        dueDate: task.dueDate ? new Date(task.dueDate) : null
      });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Task not found' });
      this.router.navigate(['/tasks/list']);
    }
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.valid) {
      const formValue = this.form.value;
      const taskData: RowData = {
        ...formValue,
        rowId: this.isEditMode ? this.taskId! : Date.now(),
        dueDate: formValue.dueDate ? new Date(formValue.dueDate).toISOString() : null
      };
      
      if (this.isEditMode) {
        this.taskService.updateTask(taskData);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Task updated successfully' });
      } else {
        this.taskService.addTask(taskData);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Task created successfully' });
      }
      this.router.navigate(['/tasks/list']);
    }
  }

  onCancel() {
    this.router.navigate(['/tasks/list']);
  }
}