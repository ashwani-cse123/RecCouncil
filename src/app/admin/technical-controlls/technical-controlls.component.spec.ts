import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalControllsComponent } from './technical-controlls.component';

describe('TechnicalControllsComponent', () => {
  let component: TechnicalControllsComponent;
  let fixture: ComponentFixture<TechnicalControllsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalControllsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalControllsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
