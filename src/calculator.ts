import {Component, Inject} from 'angular2/core';
import {Control} from 'angular2/common';
import {CalculationService} from './calculation-service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'calculator',
  providers: [CalculationService],
  template: `
    <div>
      <input [ngFormControl]="a" type="number">
    </div>
    <div>
      <select [ngFormControl]="operator">
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>
    </div>
    <div>
      <input [ngFormControl]="b" type="number">
    </div>
    <div>
      Result: {{result | async}}
    </div>
  `
})
export class Calculator {
  result: Observable;
  calculationService: CalculationService;
  a: Control = new Control();
  b: Control = new Control();
  operator: Control = new Control();

  constructor(@Inject(CalculationService) calculationService: CalculationService) {
    this.calculationService = calculationService;
    this.result = Observable
      .combineLatest(this.operator.valueChanges,
                     this.a.valueChanges,
                     this.b.valueChanges)
      .debounceTime(300)
      .mergeMap(values => {
        const [operator, a, b] = values;
        return this.calculationService[operator](+a, +b);
      });
  }
}
