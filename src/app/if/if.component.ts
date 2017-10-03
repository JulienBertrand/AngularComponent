import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {

  isDisplay:boolean = true;
  isHidden:boolean = true;
  constructor() { }

  disparait(){
this.isHidden=!this.isHidden;
}



  ngOnInit() {
    setInterval(() => {
      this.isDisplay = !this.isDisplay;
    }, 1000)
  }


}
