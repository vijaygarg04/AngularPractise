import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@ Input('parentdata') public parentdata;  //decorator
@ Input('p1') public p1; 
@ Output() public childEvent = new EventEmitter();
fireEvent(){
  this.childEvent.emit('HEY CODERS');
}

}
