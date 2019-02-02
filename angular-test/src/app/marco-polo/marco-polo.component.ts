import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-marco-polo',
  templateUrl: './marco-polo.component.html',
  styleUrls: ['./marco-polo.component.css']
})
export class MarcoPoloComponent implements OnInit {
  showGoalOneResult: boolean = false;
  goalOneResult: any;
  buttonTitle: string = 'Show Goal One Result';

  constructor(private baseService: BaseService) { }

  ngOnInit() { }
  printMarcoPolo(num) {
    this.showGoalOneResult = !this.showGoalOneResult;
    this.buttonTitle = this.showGoalOneResult ? 'Hide Goal One Result' : 'Show Goal One result';
    this.goalOneResult = this.showGoalOneResult && this.baseService.getMarcoPolo(num);
  }

}
