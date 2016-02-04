import {Injectable} from 'angular2/core';
import {ReplaySubject} from 'rxjs/subject/ReplaySubject';
import {Injectable, Inject} from 'angular2/core';
import {Subject} from 'rxjs/Rx';
import {LogService} from './log-service';

@Injectable()
export class CalculationService {
  result: Subject = new Subject();
  logService: LogService;

  constructor(@Inject(LogService) logService: LogService) {
    this.logService = logService;
  }

  add(a: Number, b: Number): Subject {
    this.logService.log(`Calculating ${a} plus ${b}`);
    setTimeout(() => this.result.next(a + b), 1000);
    return this.result;
  }

  subtract(a: Number, b: Number): Subject {
    this.logService.log(`Calculating ${a} minus ${b}`);
    setTimeout(() => this.result.next(a - b), 1000);
    return this.result;
  }

  multiply(a: Number, b: Number): Subject {
    this.logService.log(`Calculating ${a} multiplied with ${b}`);
    setTimeout(() => this.result.next(a * b), 1000);
    return this.result;
  }

  divide(a: Number, b: Number): Subject {
    this.logService.log(`Calculating ${a} divided by ${b}`);
    setTimeout(() => this.result.next(a / b), 1000);
    return this.result;
  }
}
