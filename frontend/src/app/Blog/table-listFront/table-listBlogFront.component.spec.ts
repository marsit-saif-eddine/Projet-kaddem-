import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListFrontComponent } from './table-listBlogFront.component';

describe('TableListFrontComponent', () => {
  let component: TableListFrontComponent;
  let fixture: ComponentFixture<TableListFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableListFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
