import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform {

    transform(value: string): any {
        const stack: string[] = [];
        for (let i = 0; i < value.length; ++i) {
            stack.push(value[i]);
        }

        let reverse = '';
        /* TODO revisit this bug, leaving this in for now
        for (const stackItem of stack) {
            console.log(stackItem);
            reverse += stack.pop();
        }
         */
        while (stack.length > 0) {
            reverse += stack.pop();
        }

        return reverse;
    }
}
