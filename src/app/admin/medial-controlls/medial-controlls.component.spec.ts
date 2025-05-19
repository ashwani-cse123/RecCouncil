import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedialControllsComponent } from './medial-controlls.component';

describe('MedialControllsComponent', () => {
  let component: MedialControllsComponent;
  let fixture: ComponentFixture<MedialControllsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedialControllsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedialControllsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
