import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceSnapSingleComponent } from './face-snap-single.component';

describe('FaceSnapSingleComponent', () => {
  let component: FaceSnapSingleComponent;
  let fixture: ComponentFixture<FaceSnapSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceSnapSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceSnapSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
