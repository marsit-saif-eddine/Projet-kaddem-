import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { listePartenaireComponent } from './listePartenaire.component';

describe('TableListComponent', () => {
  let component: listePartenaireComponent;
  let fixture: ComponentFixture<listePartenaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ listePartenaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(listePartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
