import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Directive({
  // selector in square brackets because we are looking for an attribute
  selector: '[appHoverChangeColor]',
})
export class HoverChangeColorDirectiveDirective {
  isDark: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.debug('HoverChangeColorDirectiveDirective.constructor');

    renderer.listen(el.nativeElement, 'click', (event) => {
      this.toggle();
    });
  }

  toggle() {
    this.isDark = !this.isDark;

    if (this.isDark) {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'gray');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'white');
    }
  }
}
