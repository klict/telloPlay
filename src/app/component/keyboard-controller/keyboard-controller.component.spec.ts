import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardControllerComponent } from './keyboard-controller.component';

describe('KeyboardControllerComponent', () => {
  let component: KeyboardControllerComponent;
  let fixture: ComponentFixture<KeyboardControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyboardControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
