import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { affichepartComponent } from './affichepart.component';

describe('TableListComponent', () => {
  let component: affichepartComponent;
  let fixture: ComponentFixture<affichepartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ affichepartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(affichepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
