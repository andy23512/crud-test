import { Injectable } from '@angular/core';
import { Info } from '../info';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TableService {
  // use behavior subject to store data
  private infoSource = new BehaviorSubject<Info[]>([
    {
      title: 'Element Title',
      description: 'Element Description'
    },
    {
      title: 'test2',
      description: 'test2 Element Description'
    }
  ]);

  // an observable api for table.component to get data from
  public info$ = this.infoSource.asObservable();

  public addItem(item: Info) {
    const list = this.infoSource.getValue(); // use getValue to get old data
    this.infoSource.next([...list, item]); // use next to update data
  }

  public updateItem(newItem: Info, oldItem: Info) {
    const list = this.infoSource.getValue();
    const newList = list.map(item => (item === oldItem ? newItem : item));
    this.infoSource.next(newList);
  }

  public removeItem(itemToDelete: Info) {
    const list = this.infoSource.getValue();
    const newList = list.filter(item => item !== itemToDelete);
    this.infoSource.next(newList);
  }
}
