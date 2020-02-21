import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZomatoAPIComponent } from './zomato-api.component';

describe('ZomatoAPIComponent', () => {
  let component: ZomatoAPIComponent;
  let fixture: ComponentFixture<ZomatoAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZomatoAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZomatoAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
