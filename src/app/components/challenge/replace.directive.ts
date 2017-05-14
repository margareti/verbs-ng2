import { Directive, ElementRef, Input } from '@angular/core';
@Directive({ selector: '[replace]' })

export class ReplaceDirective {

    constructor(el: ElementRef) {

      console.log('replace directive ', el)
      el.nativeElement.style.backgroundColor = 'yellow';
    }
}
