import { Injectable } from '@angular/core';
import { IEmployee } from '../../employee/employee';
@Injectable()
export class EmployeeService {

  constructor() { }
  getEmployeeData() : IEmployee[] {
    return [
      {"Name" : "Rajeev Kushwaha","DOB" : "05/10/1987","Salary" : "545445454", "Currency" : "Rs.","Gender" : "M","MaskSalary" : "","Age" : 30, "StarRanking" : 4},
      {"Name" : "firoz","DOB" : "04/15/1992","Salary" : "987895", "Currency" : "Rs.","Gender" : "M","MaskSalary" : "","Age" : 25, "StarRanking" : 2},
      {"Name" : "Gaurav","DOB" : "06/18/1997","Salary" : "487895", "Currency" : "Rs.","Gender" : "M","MaskSalary" : "","Age" : 20, "StarRanking" : 3},
      {"Name" : "Gunjan","DOB" : "10/20/1986","Salary" : "4807895", "Currency" : "Rs.","Gender" : "F","MaskSalary" : "","Age" : 29, "StarRanking" : 5},
      {"Name" : "Anujan","DOB" : "08/21/1989","Salary" : "8807895", "Currency" : "Rs.","Gender" : "F","MaskSalary" : "","Age" : 28, "StarRanking" : 1}
    ];
  } ;

}
