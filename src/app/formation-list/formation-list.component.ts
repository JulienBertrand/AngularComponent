import { Component, OnInit } from '@angular/core';
import Formation from '../Modele/formation';
@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {
  formations: Array<Formation> = [];
  constructor() { }

  handleFormationSelected(formation) {
    console.log('Formation selected', formation);
    alert('ALLLLLLLEEEEEEEEEEERTE');
  }
  ngOnInit() {
    this.formations = [
      new Formation('Module Angular', 'formation dans l\'angle', 5562.1, new Date(2017,9,28),new Date(2017,10,3)),
      new Formation('Module JavaScript', 'formation au typage dynamique', 4442.1, new Date(2017,7,29),new Date(2017,9,15)),
      new Formation('Module TypeScript', 'formation TS pas JS', 6562.1, new Date(2017,8,24),new Date(2017,9,6)),
      new Formation('Module Zen', 'FAUT RESTER ZEEEEEN', 1.1, new Date(2017,9,28),new Date(2017,10,3))
    ]
  }

}
