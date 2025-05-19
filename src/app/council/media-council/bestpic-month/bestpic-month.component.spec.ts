import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestpicMonthComponent } from './bestpic-month.component';

describe('BestpicMonthComponent', () => {
  let component: BestpicMonthComponent;
  let fixture: ComponentFixture<BestpicMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestpicMonthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestpicMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
