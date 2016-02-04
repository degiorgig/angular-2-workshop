import {Component, Inject} from 'angular2/core';
import {Calculator} from './calculator';
import {LogService} from './log-service';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app',
  template: `
    <calculator></calculator>
    <div>{{logs | async}}</div>
  `,
  directives: [Calculator],
  providers: [LogService]
})
export class App {
  logs: Subject<String>;

  constructor(@Inject(LogService) logService: LogService) {
    this.logs = logService.logs;
    logService.log('Application started');
  }
}
