import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'sort',
    pure: false
})
export class SortPipe implements PipeTransform {

    transform(value: [], propName: string): unknown {
        value.sort((a, b) => (a[propName] > b[propName]) ? 1 : -1); // return in lambda not necessary without {}
        return value;
    }
}
