import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ajoutDepartComponent } from './ajoutDepart.component';

describe('ajoutDepartComponent', () => {
  let component: ajoutDepartComponent;
  let fixture: ComponentFixture<ajoutDepartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ajoutDepartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ajoutDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
