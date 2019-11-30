import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgeneratorComponent } from './sgenerator.component';

describe('SgeneratorComponent', () => {
  let component: SgeneratorComponent;
  let fixture: ComponentFixture<SgeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
