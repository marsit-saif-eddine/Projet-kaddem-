import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { affichageContratComponent } from './affichageContrat.component';

describe('affichageContratComponent', () => {
  let component: affichageContratComponent;
  let fixture: ComponentFixture<affichageContratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ affichageContratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(affichageContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
