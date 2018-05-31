import { Component, OnInit } from '@angular/core';

export class TestClass {
  stringVar = 'string';
  numVar = 1;
  boolVar = true;
}

@Component({
  selector: 'app-working-state',
  templateUrl: './working-state.component.html',
  styleUrls: ['./working-state.component.css']
})
export class WorkingStateComponent implements OnInit {
  stringVar = 'string';
  numVar = 1;
  boolVar = true;
  classVar = new TestClass();

  constructor() { }

  ngOnInit() {
  }
}
