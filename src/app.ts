import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {List} from './list';

@Component({
  selector: 'app',
  template: `
    <list [list]="people"></list>
    <div>
      <h3>New person</h3>
      <input #newPerson type="text">
      <button (click)="add(newPerson.value)">Add</button>
    </div>
    <div>
      <h3>Edit at index</h3>
      <input #editPersonIndex type="number">
      <input #editPerson type="text">
      <button (click)="edit(editPersonIndex.value, editPerson.value)">Edit</button>
    </div>
    <div>
      <h3>Clear</h3>
      <button (click)="clear()">Clear</button>
    </div>
  `,
  directives: [List]
})
export class App {
  people: Array<String> = ['Andreas', 'Gion'];

  add(name: String) {
    this.people.push(name);
  }

  clear() {
    this.people.length = 0;
  }

  edit(index: String, name: String) {
    this.people[index] = name;
  }
}
