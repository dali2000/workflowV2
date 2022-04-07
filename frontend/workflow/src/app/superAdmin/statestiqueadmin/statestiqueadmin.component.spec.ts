import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatestiqueadminComponent } from './statestiqueadmin.component';

describe('StatestiqueadminComponent', () => {
  let component: StatestiqueadminComponent;
  let fixture: ComponentFixture<StatestiqueadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatestiqueadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatestiqueadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
