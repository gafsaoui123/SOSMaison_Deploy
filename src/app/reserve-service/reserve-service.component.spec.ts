import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveServiceComponent } from './reserve-service.component';

describe('ReserveServiceComponent', () => {
  let component: ReserveServiceComponent;
  let fixture: ComponentFixture<ReserveServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
