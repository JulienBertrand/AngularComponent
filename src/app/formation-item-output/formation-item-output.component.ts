import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Formation from '../Modele/formation';
@Component({
  selector: 'app-formation-item-output',
  templateUrl: './formation-item-output.component.html',
  styleUrls: ['./formation-item-output.component.css']
})
export class FormationItemOutputComponent implements OnInit {
  @Input()
  formation:Formation;
  @Output()
  formationSelected:EventEmitter<Formation> = new EventEmitter<Formation>();
  selectFormation() {
    this.formationSelected.emit(this.formation);
  }
  constructor() { }
  ngOnInit() {
  }
}
