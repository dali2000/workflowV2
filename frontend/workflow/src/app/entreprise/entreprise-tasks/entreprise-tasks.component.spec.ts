import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseTasksComponent } from './entreprise-tasks.component';

describe('EntrepriseTasksComponent', () => {
  let component: EntrepriseTasksComponent;
  let fixture: ComponentFixture<EntrepriseTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
