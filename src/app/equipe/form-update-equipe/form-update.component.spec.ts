import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdateequipeComponent } from './form-update-equipe.component';

describe('FormUpdateComponent', () => {
  let component:  FormUpdateequipeComponent;
  let fixture: ComponentFixture< FormUpdateequipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  FormUpdateequipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( FormUpdateequipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
