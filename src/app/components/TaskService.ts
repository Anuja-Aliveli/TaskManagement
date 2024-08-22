import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RowData } from './store/interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private currentListSubject = new BehaviorSubject<RowData[]>([]);
  currentList$: Observable<RowData[]> = this.currentListSubject.asObservable();

  constructor() {}

  // Method to get the current list
  getCurrentList(): Observable<RowData[]> {
    return this.currentList$;
  }

  // Method to add a new task to the list
  addTask(newTask: RowData): void {
    // Get the current list value and update it directly
    const currentList = this.currentListSubject.value;
    this.currentListSubject.next([...currentList, newTask]);
  }

  // Method to update an existing task
  updateTask(updatedTask: RowData): void {
    const currentList = this.currentListSubject.value;
    const index = currentList.findIndex(
      (task) => task.rowId === updatedTask.rowId
    );
    if (index !== -1) {
      const updatedList = [...currentList];
      updatedList[index] = updatedTask;
      this.currentListSubject.next(updatedList);
    }
  }

  getTaskById(id: number): RowData | undefined {
    const currentList = this.currentListSubject.value;
    return currentList.find((task: any) => task.rowId === id);
  }
}
