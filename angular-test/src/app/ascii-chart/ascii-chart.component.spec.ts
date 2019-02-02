import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsciiChartComponent } from './ascii-chart.component';

describe('AsciiChartComponent', () => {
  let component: AsciiChartComponent;
  let fixture: ComponentFixture<AsciiChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsciiChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsciiChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
