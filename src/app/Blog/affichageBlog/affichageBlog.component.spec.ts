import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { affichageBlogComponent } from './affichageBlog.component';

describe('affichageBlogComponent', () => {
  let component: affichageBlogComponent;
  let fixture: ComponentFixture<affichageBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ affichageBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(affichageBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
