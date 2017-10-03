import { Component, OnInit } from '@angular/core';
import Formation from '../Modele/Formation';

@Component({
  selector: 'app-interpolate',
  templateUrl: './interpolate.component.html',
  styleUrls: ['./interpolate.component.css']
})
export class InterpolateComponent implements OnInit {
  nom: string = 'Jables';
  prenom: string ='Radibovitchou';

  getFullName():string{
    return `${this.nom} ${this.prenom}`

  }
    constructor() { }

  formation:Formation=new Formation('JAVA POEI', 'une super formation!');

  formationJS:Formation;

  ngOnInit() {
    setTimeout(() => {
      this.formationJS= new Formation('Module JavaScript');
    }, 3000);
  }


}


