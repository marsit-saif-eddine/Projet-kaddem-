import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { affichagedetailComponent } from './affichagedetail.component';

describe('affichageComponent', () => {
  let component:  affichagedetailComponent;
  let fixture: ComponentFixture< affichagedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  affichagedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( affichagedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
