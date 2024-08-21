import { createSelector } from '@ngrx/store';
import { TaskStoreInterface } from './interface';

export const selectError = (state: TaskStoreInterface) => state.error;
export const selectTaskDetails = (state: TaskStoreInterface) => state.taskDetails;
export const selectTaskList = (state: TaskStoreInterface) => state.taskList;
