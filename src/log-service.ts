import {Injectable} from 'angular2/core';

@Injectable()
export class LogService {
  static globalLoggerNr: Number = 0;
  loggerNr: Number;

  constructor() {
    this.loggerNr = LogService.globalLoggerNr++;
  }

  log(message: String) {
    setTimeout(() => {
      console.log(`Logger(${this.loggerNr}): ${message}`);
    }, 1000);
  }
}
