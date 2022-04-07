import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarEntrepriseComponent } from './nar-entreprise.component';

describe('NarEntrepriseComponent', () => {
  let component: NarEntrepriseComponent;
  let fixture: ComponentFixture<NarEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NarEntrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NarEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
