import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcoPoloComponent } from './marco-polo.component';

describe('MarcoPoloComponent', () => {
  let component: MarcoPoloComponent;
  let fixture: ComponentFixture<MarcoPoloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcoPoloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcoPoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
