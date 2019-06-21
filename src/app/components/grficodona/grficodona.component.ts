import { Component, OnInit, Input} from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grficodona',
  templateUrl: './grficodona.component.html',
  styles: []
})
export class GrficodonaComponent implements OnInit {

  @Input('labelList') labelList: Label[]; // = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('dataList') dataList: MultiDataSet; // = [[350, 450, 100]];
  @Input('chartType') chartType: ChartType; // = 'doughnut';

  constructor() {
    this.labelList = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    this.dataList = [[350, 450, 100]];
    this.chartType = 'doughnut';
  }

  ngOnInit() {
  }

}
