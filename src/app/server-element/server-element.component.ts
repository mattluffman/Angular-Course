import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    ElementRef,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    ViewChild
} from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent
    implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    @Input('srvElement') element: { type: string, name: string, content: string };
    @Input() name: string;
    @ViewChild('heading', {static: true}) header: ElementRef;

    constructor() {
        this.log('constructor called');
        console.log('                         %o', this);
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.log('ngOnChanges() called');
        this.logObject(changes);
    }

    ngOnInit(): void {
        this.log("ngOnInit() called");
        this.log(this.header.nativeElement.textContent); // blank on load
    }

    ngDoCheck(): void {
        this.log('ngDoCheck() called'); //every change detection run
    }

    ngAfterContentInit() {
        this.log('ngAfterContentInit() called');
    }

    ngAfterContentChecked(): void {
        this.log('ngAfterContentChecked() called');
    }

    ngAfterViewInit() {
        this.log('ngAfterViewInit() called');
        this.log(this.header.nativeElement.textContent); // testserver on load
    }

    ngAfterViewChecked() {
        this.log('ngAfterViewChecked() called');
    }

    ngOnDestroy() {
        this.log('ngOnDestroy() called');
    }

    private log(msg: string): void {
        console.log(`ServerElementComponent - ${msg}`);
    }

    private logObject(obj: object): void {
        console.log('ServerElementComponent - %o', obj);
    }
}
