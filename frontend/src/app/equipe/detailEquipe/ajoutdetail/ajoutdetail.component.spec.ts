import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutedetailComponent } from './ajoutdetail.component';

describe('AjoutedetailComponent', () => {
  let component: AjoutedetailComponent;
  let fixture: ComponentFixture<AjoutedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
