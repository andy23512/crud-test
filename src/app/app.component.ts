import { Component, OnInit } from '@angular/core';
import { Info } from './info';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    showForm = false;
    showDetails = false;
    title: string = "";
    description: string = "";

    currentElement: Info;

    ngOnInit() {

    }

    onDisplayClicked(display: boolean) {
        this.showForm = display;
    }

    onDisplayDetailsClicked(displayDetails: boolean) {
        this.showDetails = displayDetails;
    }

    setCurrentElement(selectedElement: Info) {
        this.currentElement = selectedElement;
    }
}
