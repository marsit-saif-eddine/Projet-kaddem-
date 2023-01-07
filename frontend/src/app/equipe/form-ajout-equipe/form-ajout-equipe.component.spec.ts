import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjoutequipeComponent } from './form-ajout-equipe.component';

describe('FormAjoutComponent', () => {
  let component: FormAjoutequipeComponent;
  let fixture: ComponentFixture<FormAjoutequipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAjoutequipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAjoutequipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
