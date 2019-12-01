import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrgeneratorComponent } from './srgenerator.component';

describe('SrgeneratorComponent', () => {
  let component: SrgeneratorComponent;
  let fixture: ComponentFixture<SrgeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrgeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrgeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
