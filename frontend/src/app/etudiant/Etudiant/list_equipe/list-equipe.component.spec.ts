import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListequipeComponent } from './list-equipe.component';

describe('TableListComponent', () => {
  let component: TableListequipeComponent ;
  let fixture: ComponentFixture<TableListequipeComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableListequipeComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListequipeComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
