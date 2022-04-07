import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatestiqueworkflowComponent } from './statestiqueworkflow.component';

describe('StatestiqueworkflowComponent', () => {
  let component: StatestiqueworkflowComponent;
  let fixture: ComponentFixture<StatestiqueworkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatestiqueworkflowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatestiqueworkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
