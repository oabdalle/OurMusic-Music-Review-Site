import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeysearchComponent } from './keysearch.component';

describe('KeysearchComponent', () => {
  let component: KeysearchComponent;
  let fixture: ComponentFixture<KeysearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeysearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeysearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
