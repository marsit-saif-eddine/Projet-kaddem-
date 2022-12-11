import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { affichageComponent } from './affichage.component';

describe('affichageComponent', () => {
  let component: affichageComponent;
  let fixture: ComponentFixture<affichageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ affichageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(affichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
