import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-ascii-chart',
  templateUrl: './ascii-chart.component.html',
  styleUrls: ['./ascii-chart.component.css']
})
export class AsciiChartComponent implements OnInit {

  constructor(private baseService: BaseService) { }

  ngOnInit() { }

  downloadOutputStroy() {
    this.baseService.readInputStory();
  }

}
