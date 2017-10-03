import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  color:string ='green';
  bold:string = 'bold';
  constructor() { }

  ngOnInit() {
    setInterval(() =>{
      //expression ternaire(correspond au if)
      //this.color = (this.color==='green')?'red':'green';
      if (this.color==='green'){
        return this.color='red';
      }
      else {
        this.color='green';
      }

    }, 300)
    setInterval(() =>{
      //expression ternaire(correspond au if)
      //this.color = (this.color==='green')?'red':'green';
      if (this.bold==='bold'){
        return this.bold='normal';
      }
      else {
        this.bold='bold';
      }

    }, 600)
  }

}
