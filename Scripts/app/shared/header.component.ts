import { Component } from '@angular/core';

import { Searchbox } from '../custom/searchbox';
@Component({
    selector: 'header-element',
    template: `
    <header>
        <div class="container-wrap">
            <div class="logo-wrap"></div>
            <div class="search-wrap"><searchbox></searchbox></div>
        </div>
    </header>
    `,
    styles: [`
        header{
            position: fixed;
            top: 0;
            background-color: #fff;
            z-index: 10;
            width: 100%;
            height: 7em;
        }
        div.container-wrap{
            display:flex;
            width:70%;
            margin:0 auto;
            padding-top:1%;
        }
        div.logo-wrap{
            background: url(images/logo.png) no-repeat;
            display: inline-block;
            height: 100%;
            width: 6em;
            background-size: contain;
            float:left;
        }
        div.search-wrap{
            padding-top:1em;
            float:left;
            width: 60%;
            margin: 0 auto;
        }
    `]
})

export class Header {

} 