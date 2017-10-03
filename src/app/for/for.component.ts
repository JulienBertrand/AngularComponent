import {Component, OnInit} from '@angular/core';
import Formation from '../Modele/formation';
import {ifTrue} from "codelyzer/util/function";

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {
  formations: Array<Formation> = [];


  getColorByElement(isFirst: boolean, isLast: boolean,) {
    return isFirst ? 'red' : isLast ? '#0ff30f' : 'black';
    }
  getBackgroundByElement(isPair:boolean) {
    return isPair ? 'grey':'white';
  }
  constructor() {
  }

  ngOnInit() {
    this.formations = [
      new Formation('Module Angular'),
      new Formation('Module JavaScript'),
      new Formation('Module TypeScript'),
      new Formation('Module Zen')
    ]
  }
}
