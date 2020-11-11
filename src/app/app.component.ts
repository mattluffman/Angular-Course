import {Component} from '@angular/core';
import {EvenComponent} from "./even/even.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [`
        #footer {
            padding-bottom: 5em;
        }
    `]
})
export class AppComponent {
    oddNumbers: number[] = [];
    evenNumbers: number[] = [];

    processNewComponent(eventNumber: number) {
        // if odd, create an odd component, even otherwise
        if (eventNumber % 2 == 1) {
            this.oddNumbers.push(eventNumber);
        } else {
            this.evenNumbers.push(eventNumber);
        }

        document.querySelector('#footer').scrollIntoView({behavior: "smooth"});
    }
}
