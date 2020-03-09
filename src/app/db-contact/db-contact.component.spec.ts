import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbContactComponent } from './db-contact.component';

describe('DbContactComponent', () => {
  let component: DbContactComponent;
  let fixture: ComponentFixture<DbContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
