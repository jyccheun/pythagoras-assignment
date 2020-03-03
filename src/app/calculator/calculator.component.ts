import { Component, OnInit } from '@angular/core';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  sideA : any;
  sideB : any;
  sideC : string;

  showC : boolean = false; // show hypotenuse

  error : string; // message to inform user of invalid input

  constructor() { }

  ngOnInit() {
  }

  calculate() {
    this.error = "";

    // check if anything non-numeric was used as an input
    // empty inputs are counted as 0
    if (isNaN(this.sideA || 0) || isNaN(this.sideB || 0)) {
      this.error = "Invalid input";
      console.log(this.error);
      return;
    }

    this.showC = true;

    // round output to 3 digits
    this.sideC = String(Math.round(Math.sqrt(Math.pow(this.sideA, 2) + Math.pow(this.sideB, 2)) * 1000) / 1000 || 0);
  }

  reset() {
    this.sideA = "";
    this.sideB = "";
    this.sideC = "";
    this.error = "";
    this.showC = false;
  }
}
