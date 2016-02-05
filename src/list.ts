import {Component, Input, Inject} from 'angular2/core';
import {ListItem} from './list-item';

@Component({
  selector: 'list',
  template: `
    <ul>
      <li *ngFor="#item of list">
        <list-item [item]="item"></list-item>
      </li>
    </ul>
  `,
  directives: [ListItem]
})
export class List {
  @Input() list: Array<String>;

  ngOnChanges() {
    console.log('List OnChanges');
  }
}
