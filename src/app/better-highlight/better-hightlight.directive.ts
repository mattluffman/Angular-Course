import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
    selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {
    @Input() defaultColor: string = 'transparent';
    @Input() highlightColor: string = 'blue';
    @HostBinding('style.backgroundColor') backgroundColor;

    constructor() {
    }

    ngOnInit(): void {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.defaultColor;
    }
}
