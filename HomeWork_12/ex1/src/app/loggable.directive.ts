import { ElementRef, Renderer2, HostListener } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appLoggable]'
})
export class LoggableDirective {

  constructor(private element: ElementRef, private renderer2: Renderer2) { }
  @HostListener('dblclick') dblClick() {
  console.log('DIV element double-clicked');
}
}
