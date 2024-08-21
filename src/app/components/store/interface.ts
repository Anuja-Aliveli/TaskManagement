export interface TaskStoreInterface {
    taskDetails: TaskDetails | null;
    taskList: TaskList | null;
    error: string;
}

export interface TaskDetails {
    title: string;
    description: string;
    dueDate: Date | null;
    status: string;
    priority: string;
}

export interface TaskList {
    columnData: ColumnData,
    rowData: RowData
}

export interface ColumnData {
    fieldname: string;
    fieldtype: 'Data' | 'status' | 'dateType' | 'link';
    label: string;
}

export interface RowData {
    updatedAt: Date | null;
    createdAt: Date | null;
    title: string;
    description: string;
    dueDate: Date | null;
    status: string;
    priority: string;
}