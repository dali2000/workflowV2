import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatestiqueComponent } from './statestique.component';

describe('StatestiqueComponent', () => {
  let component: StatestiqueComponent;
  let fixture: ComponentFixture<StatestiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatestiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatestiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
