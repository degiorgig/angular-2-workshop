import {Injectable} from 'angular2/core';

@Injectable()
export class LogService {
  static globalLoggerNr = 0;
  loggerNr;

  constructor() {
    this.loggerNr = LogService.globalLoggerNr++;
  }

  log(message) {
    console.log(`Logger(${this.loggerNr}): ${message}`);
  }
}
