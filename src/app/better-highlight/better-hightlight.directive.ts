import {Directive, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
    selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {
    @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

    constructor() {
    }

    ngOnInit(): void {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
        this.backgroundColor = 'blue';
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = 'transparent';
    }
}
