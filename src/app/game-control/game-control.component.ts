import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
    private static readonly STOPPED: number = -1;

    private interval: number = GameControlComponent.STOPPED;
    @Output() gameTick = new EventEmitter<number>();
    @Output("reset") reset = new EventEmitter();
    private seconds: number = 1;


    constructor() {
    }

    ngOnInit(): void {
    }

    onStart(): void {
        if (this.interval === GameControlComponent.STOPPED) {
            this.interval = setInterval(() => {
                    console.log(this.seconds);
                    this.gameTick.emit(this.seconds++);
                },
                1000);
            console.log(`interval id: ${this.interval}`);
        }
    }

    onPause(): void {
        console.log(`pausing game at ${this.seconds}`);
        clearInterval(this.interval);
        this.interval = GameControlComponent.STOPPED;
        // not resetting seconds because when you restart it doesn't clear out all of
        // the existing components without an extra event
    }

    onReset(): void {
        clearInterval(this.interval);
        this.interval = GameControlComponent.STOPPED;
        this.seconds = 1;
        this.reset.emit();
    }
}
