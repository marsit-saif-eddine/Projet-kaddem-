import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListContratComponent } from './table-list.component';

describe('TableListContratComponent', () => {
  let component: TableListContratComponent;
  let fixture: ComponentFixture<TableListContratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableListContratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
