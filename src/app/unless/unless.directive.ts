import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[appUnless]'
})
export class UnlessDirective {
    // still a property but its a method as well
    // note that the property name has the share the same name as the selector
    @Input() set appUnless(condition: boolean) {
        if (!condition) {
            this.vcRef.createEmbeddedView(this.templateRef);
        } else {
            this.vcRef.clear();
        }
    }

    constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
    }

}
