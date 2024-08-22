import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskStoreInterface } from './interface';

export const selectTaskManagement =
    createFeatureSelector<TaskStoreInterface>('TaskManagement');

export const selectError = createSelector(
    selectTaskManagement,
    (state: TaskStoreInterface) => state.error
);

export const selectTaskDetails = createSelector(
    selectTaskManagement,
    (state: TaskStoreInterface) => state.taskDetails
);

export const selectTaskList = createSelector(
    selectTaskManagement,
    (state: TaskStoreInterface) => state.taskList
);