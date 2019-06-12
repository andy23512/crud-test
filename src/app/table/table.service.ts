import { Injectable } from "@angular/core";
import { Info } from "../info";
import { Subject } from "rxjs/internal/Subject";

@Injectable()
export class TableService {
    listSubject = new Subject<Info>();

    getInfo(): Info[] {
        return [
            {
                title: 'Element Title',
                description: 'Element Description'
            }, {
                title: 'test2',
                description: 'test2 Element Description'
            }
        ]
    }

    temp = this.getInfo();

    public addItem(item: Info) {
        this.temp.push(item);
        this.listSubject.next(item);
    }

    public updateItem(newitem: Info, olditem: Info) {
        this.temp.map(data => {
            if (data.title === olditem.title && data.description === olditem.description) {
                data.title = newitem.title;
                data.description = newitem.description
            }
        });
    }

    public removeItem(item: Info) {
        this.temp = this.temp.filter(function (obj) {
            return (obj.title !== item.title && obj.description !== item.description);
        });
    }

    public getFooBarList() {
        this.getInfo().map(data => {
            this.listSubject.next(data);
        });
        return this.listSubject.asObservable();
    }
}