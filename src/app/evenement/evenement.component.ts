import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  isCache:boolean=false;
  survol() {
    console.log('survol');
  }
  dehors(){
    console.log('dehors');
  }
  handleClick() {
    console.log('Le boutton a été cliqué');
  this.isCache=!this.isCache;



  }
  constructor() { }
  ngOnInit() {
  }
}
