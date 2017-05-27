import {Directive, OnInit, ElementRef, Renderer} from '@angular/core';

@Directive({selector: '[focus]'})
export class FocusDirective implements OnInit {

  el:ElementRef;
  renderer:Renderer;
    constructor(el: ElementRef, renderer: Renderer) {
      this.renderer = renderer;
      this.el = el;
    }

    ngOnInit():any {
      if (this.el.nativeElement) {
        this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
      }
    }
  }
