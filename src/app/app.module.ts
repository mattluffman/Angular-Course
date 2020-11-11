import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {GameControlComponent} from './game-control/game-control.component';
import {OddComponent} from './odd/odd.component';
import {EvenComponent} from './even/even.component';
import {DatePipe} from "@angular/common";

@NgModule({
    declarations: [
        AppComponent,
        GameControlComponent,
        OddComponent,
        EvenComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
