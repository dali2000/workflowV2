import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilEntComponent } from './profil-ent.component';

describe('ProfilEntComponent', () => {
  let component: ProfilEntComponent;
  let fixture: ComponentFixture<ProfilEntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilEntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilEntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
