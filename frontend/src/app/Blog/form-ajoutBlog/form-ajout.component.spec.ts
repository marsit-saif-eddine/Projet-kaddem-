import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjoutBlogComponent } from './form-ajout.component';

describe('FormAjoutBlogComponent', () => {
  let component: FormAjoutBlogComponent;
  let fixture: ComponentFixture<FormAjoutBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAjoutBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAjoutBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
