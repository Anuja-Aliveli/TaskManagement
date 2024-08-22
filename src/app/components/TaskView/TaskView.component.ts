import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../TaskService';
import { RowData } from '../store/interface';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-TaskView',
  templateUrl: './TaskView.component.html',
  styleUrls: ['./TaskView.component.css'],
  providers: [MessageService],
})
export class TaskViewComponent implements OnInit {
  task: RowData | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const taskId = +params['id']; // Convert string to number
      this.loadTask(taskId);
    });
  }

  loadTask(id: number) {
    this.task = this.taskService.getTaskById(id);

    if (!this.task) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Task not found',
      });
      this.router.navigate(['/tasks']); // Redirect to task list
    }
  }

  onEdit() {
    if (this.task) {
      this.router.navigate(['/tasks/edit', this.task.rowId]);
    }
  }

  onBack() {
    this.router.navigate(['/tasks/list']);
  }
}
