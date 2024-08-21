import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { TaskListComponent } from './components/TaskList/TaskList.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { TaskFormComponent } from './components/TaskForm/TaskForm.component';
import { TaskViewComponent } from './components/TaskView/TaskView.component';
import { StoreModule } from '@ngrx/store';
import { TaskReducer } from './components/store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFormComponent,
    TaskViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    CalendarModule,
    TableModule,
    FormsModule,
    StoreModule.forRoot({ tasks: TaskReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
