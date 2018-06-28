import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor() { }
  getEmployees(){
    return [
              {
                id:1,
                name:'vijay',
                age:'20'
              },
              {
                id:2,
                name:'hanu',
                age:'19'
              },
              {
                id:3,
                name:'dheer',
                age:'18'
              }
           ];
  }
}
