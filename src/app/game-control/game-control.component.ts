import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
    private interval: number;
    @Output() gameTick = new EventEmitter<number>();
    private seconds: number = 1;

    constructor() {
    }

    ngOnInit(): void {
    }

    onStart() {
        this.interval = setInterval(() => {
                console.log(this.seconds);
                this.gameTick.emit(this.seconds++);
            },
            1000);
        console.log(`interval id: ${this.interval}`);
    }

    onPause() {
        console.log(`pausing game at ${this.seconds}`);
        clearInterval(this.interval);
        // not resetting seconds because when you restart it doesn't clear out all of
        // the existing components without an extra event
    }
}
