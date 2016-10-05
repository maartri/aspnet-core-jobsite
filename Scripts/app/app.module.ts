import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppComponent }   from './app.component';
import { Home } from './home/home';
import { Header } from './shared/header.component';
import { Footer } from './shared/footer.component';
import { Searchbox } from './custom/searchbox';


import { routing,
    appRoutingProviders } from './routes';

@NgModule({
    imports: [BrowserModule, routing, FormsModule],
    declarations: [
        AppComponent,
        Header,
        Footer,
        Searchbox,
        Home
    ],
    providers: [
        appRoutingProviders       
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
