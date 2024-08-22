import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RowData } from './store/interface';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private currentListSubject = new BehaviorSubject<RowData[]>([]);
    currentList$: Observable<RowData[]> = this.currentListSubject.asObservable();

    constructor() { }

    // Method to get the current list
    getCurrentList(): Observable<RowData[]> {
        return this.currentList$;
    }

    // Method to add a new task to the list
    addTask(newTask: RowData): void {
        this.currentList$.subscribe(currentList => {
            this.currentListSubject.next([...currentList, newTask]);
        });
    }
}
