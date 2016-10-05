import { Component, EventEmitter } from '@angular/core';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

@Component({
    selector: 'searchbox',
    template: `
        <div class="searchbox">
            <input #searchbox (keyup)="search(searchbox.value)" placeholder="Job Search..." />
            <ul></ul>
        </div>
    `,
    styles: [`
        div.searchbox input{
            width:100%;
            line-height:3em;
            outline: none;
            border: 2px solid #7fc88e;
            color: #f37757;
            padding-left: 1em;
        }
    `]
})

export class Searchbox {

    private searchTerms = new Subject<string>();
    constructor() {
       

        this.searchTerms.subscribe(n => console.log(n));
    }

    search(inputString: string) {
        this.searchTerms.next(inputString);
    }

    
}