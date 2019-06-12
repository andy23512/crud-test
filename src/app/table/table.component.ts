import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Info } from '../info';
import { TableService } from '../table/table.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-table',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
    @Input() showForm: boolean;
    @Output() display: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input() showDetails: boolean;
    @Output() displayDetails: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Output() selectedElement: EventEmitter<Info> = new EventEmitter<Info>();
    selected: Info;

    elements : Info[];
    private subscription: Subscription;

    constructor(private _tableService: TableService) {
    }

    ngOnInit() {
        this.elements=this._tableService.temp;
        
        console.log(this.elements);
    }

    // ngOnDestroy() {
    //     this.subscription.unsubscribe();
    //   }

    addElement(element) {
        //TODO: Add element here
        this._tableService.addItem(element);
        this.ngOnInit();
        console.log(this.elements);
    }

    updateElement(newelement,oldelement) {
        //TODO: Update element here
        console.log(newelement,oldelement);
        this._tableService.updateItem(newelement,oldelement);
        this.ngOnInit();
    }

    deleteElement(data) {
        //TODO: Delete element here
        this._tableService.removeItem(data);
        this.ngOnInit();
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
