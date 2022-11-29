import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdateContratComponent } from './form-updateContrat.component';

describe('FormUpdateContratComponent', () => {
  let component: FormUpdateContratComponent;
  let fixture: ComponentFixture<FormUpdateContratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUpdateContratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUpdateContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
