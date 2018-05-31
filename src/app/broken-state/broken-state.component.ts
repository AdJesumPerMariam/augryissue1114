import { Component, OnInit } from '@angular/core';

import { RandomService } from '../random.service';

export class TestClass {
  stringVar = 'string';
  numVar = 1;
  boolVar = true;
}

@Component({
  selector: 'app-broken-state',
  templateUrl: './broken-state.component.html',
  styleUrls: ['./broken-state.component.css']
})
export class BrokenStateComponent implements OnInit {
  stringVar = 'string';
  numVar = 1;
  boolVar = true;
  classVar = new TestClass();

   // <-- Remove _randomService from constructor and broken-state will work in Augry
  constructor(private _randomService: RandomService) { }

  ngOnInit() {
  }
}
