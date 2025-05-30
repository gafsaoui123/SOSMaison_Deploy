import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewDetailsComponent } from './user-view-details.component';

describe('UserViewDetailsComponent', () => {
  let component: UserViewDetailsComponent;
  let fixture: ComponentFixture<UserViewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
