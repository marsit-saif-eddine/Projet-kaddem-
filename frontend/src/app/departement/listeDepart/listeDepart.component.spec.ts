import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { listeDepartComponent } from './listeDepart.component';

describe('TableListComponent', () => {
  let component: listeDepartComponent;
  let fixture: ComponentFixture<listeDepartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ listeDepartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(listeDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
