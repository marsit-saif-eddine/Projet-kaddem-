import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { affichagePartenaireComponent } from './affichagePartenaire.component';

describe('affichageDepartComponent', () => {
  let component: affichagePartenaireComponent;
  let fixture: ComponentFixture<affichagePartenaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ affichagePartenaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(affichagePartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
