import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjoutContratComponent } from './form-ajout.component';

describe('FormAjoutContratComponent', () => {
  let component: FormAjoutContratComponent;
  let fixture: ComponentFixture<FormAjoutContratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAjoutContratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAjoutContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
