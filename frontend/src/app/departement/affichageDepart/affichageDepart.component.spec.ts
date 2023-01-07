import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { affichageDepartComponent } from './affichageDepart.component';

describe('affichageDepartComponent', () => {
  let component: affichageDepartComponent;
  let fixture: ComponentFixture<affichageDepartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ affichageDepartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(affichageDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
