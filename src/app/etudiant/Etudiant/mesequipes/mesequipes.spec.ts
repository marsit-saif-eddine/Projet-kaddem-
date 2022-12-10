import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { mesequipesComponent } from './mesequipes';

describe('TableListComponent', () => {
  let component: mesequipesComponent ;
  let fixture: ComponentFixture<mesequipesComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ mesequipesComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(mesequipesComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
