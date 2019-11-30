import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgeneratorComponent } from './rgenerator.component';

describe('RgeneratorComponent', () => {
  let component: RgeneratorComponent;
  let fixture: ComponentFixture<RgeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
