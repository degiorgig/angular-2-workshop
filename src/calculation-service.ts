import {Injectable} from 'angular2/core';
import {ReplaySubject} from 'rxjs/subject/ReplaySubject';
import {Injectable, Inject} from 'angular2/core';
import {Subject} from 'rxjs/Rx';
import {LogService} from './log-service';

@Injectable()
export class CalculationService {
  result = new Subject();
  logService;

  constructor(@Inject(LogService) logService) {
    this.logService = logService;
  }

  add(a, b) {
    this.logService.log(`Calculating ${a} plus ${b}`);
    setTimeout(() => this.result.next(a + b), 1000);
    return this.result;
  }

  subtract(a, b) {
    this.logService.log(`Calculating ${a} minus ${b}`);
    setTimeout(() => this.result.next(a - b), 1000);
    return this.result;
  }

  multiply(a, b) {
    this.logService.log(`Calculating ${a} multiplied with ${b}`);
    setTimeout(() => this.result.next(a * b), 1000);
    return this.result;
  }

  divide(a, b) {
    this.logService.log(`Calculating ${a} divided by ${b}`);
    setTimeout(() => this.result.next(a / b), 1000);
    return this.result;
  }
}
