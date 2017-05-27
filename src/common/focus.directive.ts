import {Directive, OnInit, ElementRef, Renderer} from '@angular/core';

@Directive({selector: '[focus]'})
export class FocusDirective  {

  el:ElementRef;
  renderer:Renderer;
  private _autofocus;
    constructor(el: ElementRef, renderer: Renderer) {
      this.renderer = renderer;
      this.el = el;
    }

    ngOnInit():any {
      console.log("on init")
      // if (this.el.nativeElement) {
      //   this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
      // }
    }
    ngAfterViewInit() {
      console.log("view after init")
        if (this._autofocus || typeof this._autofocus === "undefined")
            this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
    }
  }
