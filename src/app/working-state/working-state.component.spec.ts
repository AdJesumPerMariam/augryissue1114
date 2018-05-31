import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingStateComponent } from './working-state.component';

describe('WorkingStateComponent', () => {
  let component: WorkingStateComponent;
  let fixture: ComponentFixture<WorkingStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
