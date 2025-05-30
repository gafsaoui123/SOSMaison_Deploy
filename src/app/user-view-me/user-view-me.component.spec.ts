import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewMeComponent } from './user-view-me.component';

describe('UserViewMeComponent', () => {
  let component: UserViewMeComponent;
  let fixture: ComponentFixture<UserViewMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
