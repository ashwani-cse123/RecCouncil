import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalCouncilComponent } from './technical-council.component';

describe('TechnicalCouncilComponent', () => {
  let component: TechnicalCouncilComponent;
  let fixture: ComponentFixture<TechnicalCouncilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalCouncilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalCouncilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
