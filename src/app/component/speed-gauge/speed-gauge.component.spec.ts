import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedGaugeComponent } from './speed-gauge.component';

describe('SpeedGaugeComponent', () => {
  let component: SpeedGaugeComponent;
  let fixture: ComponentFixture<SpeedGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
