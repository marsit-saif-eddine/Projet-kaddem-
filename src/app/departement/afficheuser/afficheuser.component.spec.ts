import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { afficheusercomponent } from './afficheuser.component';

describe('TableListComponent', () => {
  let component: afficheusercomponent;
  let fixture: ComponentFixture<afficheusercomponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ afficheusercomponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(afficheusercomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
