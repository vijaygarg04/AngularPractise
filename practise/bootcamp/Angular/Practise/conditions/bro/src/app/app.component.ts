import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayprop =false;
  currcolor='bluee';
  public colors:string[]=['red','orange','blue','black','skyblue','violet']
  
}
