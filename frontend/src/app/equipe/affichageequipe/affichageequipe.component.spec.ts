import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { affichagequipeeComponent } from './affichageequipe.component';

describe('affichageComponent', () => {
  let component:  affichagequipeeComponent;
  let fixture: ComponentFixture< affichagequipeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  affichagequipeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( affichagequipeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
