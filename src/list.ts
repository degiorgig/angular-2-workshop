import {Component, ChangeDetectionStrategy, Input, Inject, ChangeDetectorRef} from 'angular2/core';
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
  directives: [ListItem],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class List {
  @Input() list;
  previousLength: Number = 0;

  constructor(@Inject(ChangeDetectorRef) changeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
  }

  ngDoCheck() {

    if (this.list.length !== this.previousLength) {
      console.log('List Do Check: Detected change');
      this.changeDetectorRef.markForCheck();
      this.previousLength = this.list.length;
    } else {
      console.log('List Do Check: No change');
    }
  }

  ngOnChanges() {
    console.log('List OnChanges');
  }
}
