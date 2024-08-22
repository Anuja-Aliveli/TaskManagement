import { Component, OnInit } from '@angular/core';
import { DropdownOptions } from '../store/interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadTaskDetailsSuccess } from '../store/actions';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-TaskForm',
  templateUrl: './TaskForm.component.html',
  styleUrls: ['./TaskForm.component.css'],
  providers: [MessageService]

})
export class TaskFormComponent implements OnInit {
  priority: DropdownOptions[] = [];
  status: DropdownOptions[] = [];
  form: any;
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private store: Store, private router: Router, private messageService: MessageService) {
  }

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
      this.store.dispatch(loadTaskDetailsSuccess(this.form.value));
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Task Created Successfully' });
      console.log('Task created:', this.form.value);
    }
  }

  onCancel() {
    this.router.navigate(['tasks/list']);
  }
}
