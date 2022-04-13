import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListusergroupComponent } from './listusergroup.component';

describe('ListusergroupComponent', () => {
  let component: ListusergroupComponent;
  let fixture: ComponentFixture<ListusergroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListusergroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListusergroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
