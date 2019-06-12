import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Info } from '../info';
import { TableComponent } from '../table/table.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    providers: [TableComponent],
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    elementForm = this.fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
    });

    @Input() oldInfo: Info;

    constructor(private table: TableComponent, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.elementForm.setValue({ title: this.oldInfo.title, description: this.oldInfo.description });
    }

    onSubmit() {
        console.log("!");
        // TODO: Use EventEmitter with form value
        console.log(this.elementForm.value);
        //add element
        if (this.oldInfo.title === "") {
            this.table.addElement(this.elementForm.value);
        }
        //edit element
        else {
            this.table.updateElement(this.elementForm.value, this.oldInfo);
        }
        this.ngOnInit();
    }
}
