import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { updatePartenaireComponent } from './updatePartenaire.component';

describe('FormUpdateComponent', () => {
  let component: updatePartenaireComponent;
  let fixture: ComponentFixture<updatePartenaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ updatePartenaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(updatePartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
