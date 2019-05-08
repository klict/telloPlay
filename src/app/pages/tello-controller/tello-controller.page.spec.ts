import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelloControllerPage } from './tello-controller.page';

describe('TelloControllerPage', () => {
  let component: TelloControllerPage;
  let fixture: ComponentFixture<TelloControllerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelloControllerPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelloControllerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
