import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name='ViJaY gaRG'
  date1=new Date();
  person={
    first:'vijay',
    last:'garg'
  }
}
