import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Info } from '../info';
import { TableService } from '../table/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() showForm: boolean;
  @Output() display: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() showDetails: boolean;
  @Output() displayDetails: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() selectedElement: EventEmitter<Info> = new EventEmitter<Info>();
  selected: Info;

  constructor(public tableService: TableService) {}

  deleteElement(data: Info) {
    //TODO: Delete element here
    this.tableService.removeItem(data);
  }

  toggleForm() {
    this.selectedElement.emit({ title: '', description: '' });
    this.display.emit(!this.showForm);
    this.displayDetails.emit(false);
  }

  onSelect(info: Info): void {
    this.selectedElement.emit(info);
    this.selected = info;
    this.displayDetails.emit(true);
    this.display.emit(false);
  }
}
