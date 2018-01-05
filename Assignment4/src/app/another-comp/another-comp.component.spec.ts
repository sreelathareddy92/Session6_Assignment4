import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherCompComponent } from './another-comp.component';

describe('AnotherCompComponent', () => {
  let component: AnotherCompComponent;
  let fixture: ComponentFixture<AnotherCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
