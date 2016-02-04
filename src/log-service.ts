import {Injectable} from 'angular2/core';

@Injectable()
export class LogService {
  static globalLoggerNr = 0;
  loggerNr;

  constructor() {
    this.loggerNr = LogService.globalLoggerNr++;
  }

  log(message) {
    setTimeout(() => {
      console.log(`Logger(${this.loggerNr}): ${message}`);
    }, 1000);
  }
}
