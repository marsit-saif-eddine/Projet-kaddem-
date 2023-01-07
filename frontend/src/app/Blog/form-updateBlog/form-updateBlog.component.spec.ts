import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdateBlogComponent } from './form-updateBlog.component';

describe('FormUpdateBlogComponent', () => {
  let component: FormUpdateBlogComponent;
  let fixture: ComponentFixture<FormUpdateBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUpdateBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUpdateBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
