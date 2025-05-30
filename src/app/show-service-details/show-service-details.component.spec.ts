import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowServiceDetailsComponent } from './show-service-details.component';

describe('ShowServiceDetailsComponent', () => {
  let component: ShowServiceDetailsComponent;
  let fixture: ComponentFixture<ShowServiceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowServiceDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowServiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
