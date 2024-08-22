import { createReducer, on } from '@ngrx/store';
import * as TaskActions from './actions';
import { TaskStoreInterface } from './interface';

const initialTaskState: TaskStoreInterface = {
    taskDetails: {
        title: '',
        description: '',
        status: '',
        priority: '',
        dueDate: null
    },
    taskList: [],
    error: ''
};

export const TaskReducer = createReducer(
    initialTaskState,
    // Action Details Reducers
    on(TaskActions.loadTaskList, state => ({ ...state })),
    on(TaskActions.loadTaskListSuccess, (state, { taskList }) => ({ ...state, taskList })),
    on(TaskActions.loadTaskListFailure, (state, { error }) => ({ ...state, error })),
    // Action Details Reducers
    on(TaskActions.loadTaskDetails, state => ({ ...state })),
    on(TaskActions.loadTaskDetailsSuccess, (state, { taskDetails }) => ({ ...state, taskDetails })),
    on(TaskActions.loadTaskDetailsFailure, (state, { error }) => ({ ...state, error })),
);
