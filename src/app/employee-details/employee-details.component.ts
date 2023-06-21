import { Component } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent {

  constructor() { }

  binding:any=""
  value1:any=""
  uploadedFiles: any[] = [];
  maxFileSize:number|undefined=1000000
filterValue : string = ''
cols = [

    { field: 'EmployeeID', header: 'Employee ID' },

    { field: 'EmployeeName', header: ' Employee Name' },

    { field: 'Role', header: 'Role' },

    { field: 'ContactNumber', header: 'Contact Number' },

    { field: 'EmailID', header: '  Email ID' },
    { field: 'EmployeeStatus', header: 'Employee Status' },
    { field: 'Actions', header: 'Actions' }



  ];

  products: any[] = [

    { EmployeeID: 1, EmployeeName: "vignesh", EmployeeEmail: "jhyhjuhj", Role: "hgghghg", ContactNumber: "8989898", EmailID: "vignesh@gmail.com", EmployeeStatus: "kjhkjhkjkj", Actions: "" },
    { EmployeeID: 2, EmployeeName: "Yogesh", EmployeeEmail: "jhyhjuhj", Role: "hgghghg", ContactNumber: "8989898", EmailID: "vignesh@gmail.com", EmployeeStatus: "kjhkjhkjkj", Actions: "" }];

    filterGlobal(value: string, dt: Table) {
      dt.filterGlobal(value, 'contains');
    }

}
















