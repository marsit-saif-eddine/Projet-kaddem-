import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { updateDepartComponent } from './updateDepart.component';

describe('FormUpdateComponent', () => {
  let component: updateDepartComponent;
  let fixture: ComponentFixture<updateDepartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ updateDepartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(updateDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
