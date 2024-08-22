import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskViewComponent } from './components/TaskView/TaskView.component';
import { TaskFormComponent } from './components/TaskForm/TaskForm.component';
import { TaskListComponent } from './components/TaskList/TaskList.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks/list', pathMatch: 'full' },
  { path: 'tasks/create', component: TaskFormComponent },
  { path: 'tasks/edit/:id', component: TaskFormComponent },
  { path: 'tasks/list', component: TaskListComponent },
  { path: 'tasks/view/:id', component: TaskViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
