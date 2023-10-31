import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationDataComponent } from './simulation-data.component';

describe('SimulationDataComponent', () => {
  let component: SimulationDataComponent;
  let fixture: ComponentFixture<SimulationDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimulationDataComponent]
    });
    fixture = TestBed.createComponent(SimulationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
