import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
employees=[];
  constructor(private _employeeServices:EmployeeserviceService) { }

  ngOnInit() {
    this.employees=this._employeeServices.getEmployees();
  }

}
