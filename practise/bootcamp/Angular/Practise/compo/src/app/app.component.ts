import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name="VIJAY";
  name1="hanu"
  mymsg="";
  title = 'app';
  logmsg(value){
    this.mymsg=value;
    console.log(value);
  }
}
