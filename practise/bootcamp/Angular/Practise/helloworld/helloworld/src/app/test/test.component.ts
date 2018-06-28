import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  myid="input1"
  mydisabled=true;
  hasError=true;
  isSpecial=true;
  public specialcolor="violet";
  public customstyles={
    color:'red',
    fontStyle:'italic'
  }
  public messageSpecial={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }
  public successclass="text-success";
name="VIJAY GARG";

  constructor() { }

  ngOnInit() {
  }
  greetuser(){
return "HELLO"+ name;
  }
  greetnow(event){
    console.log(event);
    
    console.log("Hello " +this.name);

    
  }
  showinput(event,value){
console.log(value);
console.log(event);


  }


}
