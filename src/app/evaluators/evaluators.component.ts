import { Component, OnInit } from '@angular/core';
import { Evaluator } from '../models/evaluator';
import { ENS } from '../models/ens';
import { EvaluatorsService } from '../services/evaluators.service';
import { ThemePalette } from '@angular/material/core';

declare let window: any;

@Component({
  selector: 'app-evaluators',
  templateUrl: './evaluators.component.html',
  styleUrls: [ './evaluators.component.css' ]
})
export class EvaluatorsComponent implements OnInit {
  evaluators: Evaluator[];
  ens: ENS[];
  breakpoint: number;

  //MatSpinner
  spinnerColor: ThemePalette = 'warn';

  //MatRipple
  centered = false;
  disabled = false;
  unbounded = false;
  radius: number;
  color: string;

  constructor(private evaluatorsService: EvaluatorsService) { }

  ngOnInit() {
    this.getEvaluators();
    this.getENS();
    this.breakpoint = (window.innerWidth <= 1024) ? 1 : 2;
  }

  getEvaluators(): void {
    this.evaluatorsService.getEvaluators()
      .subscribe(evaluators => {
          this.evaluators = this.evaluatorsService.shuffle(evaluators);
          //console.log(this.evaluators);
      });
  }

  getENS(): void {
    this.evaluatorsService.getENS()
      .subscribe(ens => {
          this.ens = this.evaluatorsService.shuffle(ens);
          console.log(this.ens);
      });
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 700) ? 1 : 2;
  }
}