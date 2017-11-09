import { Pipe, PipeTransform } from '@angular/core';
import { IEmployee } from '../../employee/employee';
@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

   setMasking(value :string) : string {
      let maskData :string = "";
      for(let data of value) {
        maskData = maskData + '#';
      }
      return maskData;
   };
   getMaskSalary(value : IEmployee[], isMask: boolean) : IEmployee[] {
     
     if(isMask) {
      return value.filter( (employee : IEmployee)=> (employee.MaskSalary = this.setMasking(employee.Salary)));
     } else {
        return value;
     }
     
   };
   
   getSortedEmployee(val :IEmployee[], sortColumn : string ) : IEmployee[] {
     var returnData : IEmployee[];
      if(sortColumn==='Name') {
        returnData = val.sort((x:IEmployee,y:IEmployee)=>(x.Name.toLowerCase() == y.Name.toLowerCase()) ? 0 : ((x.Name.toLowerCase() > y.Name.toLowerCase()) ? 1 : -1 ));

      } if(sortColumn==='DOB') {
        returnData = val.sort((x:IEmployee,y:IEmployee)=>(new Date(x.DOB) === new Date(y.DOB)) ? 0 : ((new Date(x.DOB)> new Date(y.DOB)) ? 1 : -1 ));

      }if(sortColumn==='Age') {
        returnData = val.sort((x:IEmployee,y:IEmployee)=>(x.Age === y.Age) ? 0 : ((x.Age> y.Age) ? 1 : -1 ));

      } if(sortColumn==='Salary') {
        returnData = val.sort((x:IEmployee,y:IEmployee)=>(parseInt(x.Salary) === parseInt(y.Salary)) ? 0 : ((parseInt(x.Salary)  > parseInt(y.Salary)) ? 1 : -1 ));

      } else if(sortColumn==='Gender'){
         returnData = val.sort((x:IEmployee,y:IEmployee)=>(x.Gender.toLowerCase() == y.Gender.toLowerCase()) ? 0 : ((x.Gender.toLowerCase() > y.Gender.toLowerCase()) ? 1 : -1 ));

      } else {
        returnData = val;
      }

      return returnData;
   }
   transform(value: IEmployee[], filterByName: string,filterByGender: string,filterByNameGender: string, isExact : boolean,isMask: boolean, sortedColumn : string): IEmployee[] {
    var employeeData : IEmployee[];
   if(filterByName) {
     filterByName = (filterByName) ? filterByName.toLocaleLowerCase() : null;
       employeeData = this.getMaskSalary(((filterByName) ? isExact ? value.filter((employee : IEmployee)=> (employee.Name.toLocaleLowerCase().indexOf(filterByName) == 0 )) : value.filter((employee : IEmployee)=> (employee.Name.toLocaleLowerCase().indexOf(filterByName) !== -1)) : value),isMask);
   } else if(filterByGender) {
     filterByGender = (filterByGender) ? filterByGender.toLocaleLowerCase() : null;
      employeeData =  this.getMaskSalary(((filterByGender) ? isExact ? value.filter((employee : IEmployee)=> (employee.Gender.toLocaleLowerCase().indexOf(filterByGender) == 0)) : value.filter((employee : IEmployee)=> (employee.Gender.toLocaleLowerCase().indexOf(filterByGender) !== -1)) : value),isMask);
   } else {
     filterByNameGender = (filterByNameGender) ? filterByNameGender.toLocaleLowerCase() : null;
       employeeData =  this.getMaskSalary(((filterByNameGender) ? isExact ? value.filter((employee : IEmployee)=> (employee.Name.toLocaleLowerCase().indexOf(filterByNameGender) == 0 || employee.Gender.toLocaleLowerCase().indexOf(filterByNameGender) == 0)) : value.filter((employee : IEmployee)=> (employee.Name.toLocaleLowerCase().indexOf(filterByNameGender) !== -1 || employee.Gender.toLocaleLowerCase().indexOf(filterByNameGender) !== -1)) : value),isMask);
   }

    return this.getSortedEmployee(employeeData,sortedColumn);




  
    
  }


}


    