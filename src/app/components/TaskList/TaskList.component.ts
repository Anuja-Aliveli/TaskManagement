import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-TaskList',
  templateUrl: './TaskList.component.html',
  styleUrls: ['./TaskList.component.css']
})
export class TaskListComponent implements OnInit {
  rowData: any
  columns: any
  searchInput: string = '';
  globalFilters: any = [];
  constructor(private router: Router) { }
  @ViewChild('dt') table?: Table;

  ngOnInit() {
    this.columns = [
      { fieldtype: 'text', fieldname: 'code', label: 'Code' },
      { fieldtype: 'text', fieldname: 'name', label: 'Name' },
      { fieldtype: 'text', fieldname: 'category', label: 'Category' },
      { fieldtype: 'number', fieldname: 'quantity', label: 'Quantity' }
    ];
    this.globalFilters = this.columns.map((col: any) => col.fieldname)
    this.rowData = [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watchessssssss',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Gifts',
        quantity: 26,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },]
  }

  onCreateTask() {
    this.router.navigate(['/tasks/create'])
  }

  onGlobalFilter() {
    this.table?.filterGlobal(this.searchInput, 'contains');
  }

}
