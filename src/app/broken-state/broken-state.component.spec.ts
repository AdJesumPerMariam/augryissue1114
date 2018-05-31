import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokenStateComponent } from './broken-state.component';

describe('BrokenStateComponent', () => {
  let component: BrokenStateComponent;
  let fixture: ComponentFixture<BrokenStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokenStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokenStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
