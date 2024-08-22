import { createAction, props } from '@ngrx/store';
import { RowData, TaskDetails, TaskList } from './interface';
const prefix = 'Task Management';

// Task List Actions
export const loadTaskList = createAction(
    `${prefix} Load Task List`,
);

export const loadTaskListSuccess = createAction(
    `${prefix} Load Task List Success`,
    props<{ taskList: RowData[] }>()
);

export const loadTaskListFailure = createAction(
    `${prefix} Load Task List Failure`,
    props<{ error: any }>()
);

// Task Details Actions
export const loadTaskDetails = createAction(
    `${prefix} Load Task Details`,
);

export const loadTaskDetailsSuccess = createAction(
    `${prefix} Load Task List Success`,
    props<{ taskDetails: TaskDetails }>()
);

export const loadTaskDetailsFailure = createAction(
    `${prefix} Load Task List Failure`,
    props<{ error: any }>()
);