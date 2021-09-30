import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import * as dataOne from "./dataOne.json";
import * as dataTwo from "./dataTwo.json";
import * as dataThree from "./dataThree.json";
import { DoughnutChartComponent } from "./doughnut-chart/doughnut-chart.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})

export class AppComponent {
  arrOne: any = dataOne.data[0];
  arrTwo: any = dataTwo.data[0];
  arrThree: any = dataThree.data[0];

  @ViewChild(DoughnutChartComponent) dChartComp: any;

  doughnutCharts: any = [this.arrOne, this.arrTwo, this.arrThree];

}

