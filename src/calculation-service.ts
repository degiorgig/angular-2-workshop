import {Injectable, Inject} from 'angular2/core';
import {LogService} from './log-service';

@Injectable()
export class CalculationService {
  logService;

  constructor(@Inject(LogService) logService) {
    this.logService = logService;
  }

  add(a, b) {
    this.logService.log(`Calculating ${a} plus ${b}`);
    return a + b;
  }

  subtract(a, b) {
    this.logService.log(`Calculating ${a} minus ${b}`);
    return a - b;
  }

  multiply(a, b) {
    this.logService.log(`Calculating ${a} multiplied with ${b}`);
    return a * b;
  }

  divide(a, b) {
    this.logService.log(`Calculating ${a} divided by ${b}`);
    return a / b;
  }
}
