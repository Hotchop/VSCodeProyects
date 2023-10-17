import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDatabaseComponent } from './user-database.component';

describe('UserDatabaseComponent', () => {
  let component: UserDatabaseComponent;
  let fixture: ComponentFixture<UserDatabaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDatabaseComponent]
    });
    fixture = TestBed.createComponent(UserDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
