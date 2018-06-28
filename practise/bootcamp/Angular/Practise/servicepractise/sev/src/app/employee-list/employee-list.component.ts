import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
public employees=[]
  constructor(private _employeeServices:EmployeeserviceService) { }

  ngOnInit() {
    this.employees=this._employeeServices.getEmployees();
  }

}
