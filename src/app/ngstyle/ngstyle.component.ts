import { Component, OnInit } from '@angular/core';
import Formation from '../Modele/formation';
@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  formations: Array<Formation> = [];
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
