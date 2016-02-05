import {Component, Input} from 'angular2/core';

@Component({
  selector: 'list-item',
  template: `
    {{item}}
  `
})
export class ListItem {
  @Input() item: String;

  ngOnChanges(inputChanges) {
    if (inputChanges.item) {
      console.log('ListItem OnChanges', inputChanges.item);
    }
  }
}
