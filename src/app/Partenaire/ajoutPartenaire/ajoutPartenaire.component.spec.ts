import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ajoutPartenaireComponent } from './ajoutPartenaire.component';

describe('ajoutPartenaireComponent', () => {
  let component: ajoutPartenaireComponent;
  let fixture: ComponentFixture<ajoutPartenaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ajoutPartenaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ajoutPartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
