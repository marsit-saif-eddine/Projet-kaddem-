import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListBlogComponent } from './table-list.component';

describe('TableListBlogComponent', () => {
  let component: TableListBlogComponent;
  let fixture: ComponentFixture<TableListBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableListBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
