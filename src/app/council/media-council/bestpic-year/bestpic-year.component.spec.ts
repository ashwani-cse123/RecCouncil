import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestpicYearComponent } from './bestpic-year.component';

describe('BestpicYearComponent', () => {
  let component: BestpicYearComponent;
  let fixture: ComponentFixture<BestpicYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestpicYearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestpicYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
