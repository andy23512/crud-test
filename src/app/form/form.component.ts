import { Component, OnInit, Input } from '@angular/core';
import { Info } from '../info';
import { TableComponent } from '../table/table.component';
import { FormBuilder, Validators } from '@angular/forms';
import { TableService } from '../table/table.service';

@Component({
  providers: [TableComponent],
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  elementForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required]
  });

  @Input() oldInfo: Info;

  constructor(private tableService: TableService, private fb: FormBuilder) {}

  ngOnInit() {
    this.elementForm.setValue({
      title: this.oldInfo.title,
      description: this.oldInfo.description
    });
  }

  onSubmit() {
    console.log('!');
    // TODO: Use EventEmitter with form value
    console.log(this.elementForm.value);
    if (this.oldInfo.title === '') {
      // add element
      this.tableService.addItem(this.elementForm.value);
    } else {
      // edit element
      this.tableService.updateItem(this.elementForm.value, this.oldInfo);
    }
  }
}
