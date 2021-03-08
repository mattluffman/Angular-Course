import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {

    constructor(private element: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit(): void {
        this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
    }
}
