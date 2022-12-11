import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  FormUpdatedetailComponent } from './form-update-detail.component';

describe('FormUpdateComponent', () => {
  let component:   FormUpdatedetailComponent;
  let fixture: ComponentFixture<  FormUpdatedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [   FormUpdatedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(  FormUpdatedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
