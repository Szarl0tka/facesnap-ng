import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpObservableTrainExempleComponent } from './op-observable-train-exemple.component';

describe('OpObservableTrainExempleComponent', () => {
  let component: OpObservableTrainExempleComponent;
  let fixture: ComponentFixture<OpObservableTrainExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpObservableTrainExempleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpObservableTrainExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
