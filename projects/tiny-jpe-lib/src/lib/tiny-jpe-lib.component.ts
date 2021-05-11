import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jpe-button',
  template: `<button [disabled]="disabled">{{ text }}</button> `,
  styles: [],
})
export class JpeButtonComponent {
  @Input() text: string;
  @Input() disabled: boolean;
}
