import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagestatestiqueadminComponent } from './pagestatestiqueadmin.component';

describe('PagestatestiqueadminComponent', () => {
  let component: PagestatestiqueadminComponent;
  let fixture: ComponentFixture<PagestatestiqueadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagestatestiqueadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagestatestiqueadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
