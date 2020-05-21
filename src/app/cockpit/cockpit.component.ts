import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string; }>();
    @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string; }>();
    // newServerName = '';
    newServerContent = '';

    constructor() {
    }

    ngOnInit(): void {
    }

    onAddServer(nameInput: HTMLInputElement) {
        console.log(nameInput);
        console.log(nameInput.value);
        this.serverCreated.emit({
            serverName: nameInput.value,
            serverContent: this.newServerContent
        });
        this.clearFields();
    }

    onAddBlueprint(nameInput: HTMLInputElement) {
        this.blueprintCreated.emit({
            serverName: nameInput.value,
            serverContent: this.newServerContent
        });
        this.clearFields();
    }

    private clearFields(): void {
        this.newServerContent = '';
        // this.newServerName = '';
    }
}
