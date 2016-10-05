import { Component } from '@angular/core';

import { Footer } from './shared/footer.component';
import { Header } from './shared/header.component';

@Component({
    selector: 'my-app',
    template: `
        <header-element></header-element>

        <div class="content-wrap">
            <router-outlet></router-outlet>
        </div>
        

    `,
    styles: [`
        div.content-wrap {
            width: 70%;
            margin: 0 auto;
            margin-top: 10em;
        }
    `]
})
export class AppComponent { }
