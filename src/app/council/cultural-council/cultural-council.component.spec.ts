import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalCouncilComponent } from './cultural-council.component';

describe('CulturalCouncilComponent', () => {
  let component: CulturalCouncilComponent;
  let fixture: ComponentFixture<CulturalCouncilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CulturalCouncilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CulturalCouncilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
