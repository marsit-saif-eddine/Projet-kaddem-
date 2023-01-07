import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdateAffectationComponent } from './form-updateAffectation.component';

describe('FormUpdateAffectationComponent', () => {
  let component: FormUpdateAffectationComponent;
  let fixture: ComponentFixture<FormUpdateAffectationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUpdateAffectationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUpdateAffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
