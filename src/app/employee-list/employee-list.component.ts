import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee/employee';
import { EmployeeService } from  '../shared/service/employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
   providers : [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
   showSalary : boolean = true;
   employees : IEmployee[];
   private _restEmployeeservice : EmployeeService;
   constructor(employeeService :EmployeeService) {
      this.employees = employeeService.getEmployeeData();
   }

  ngOnInit() {
  }

}
