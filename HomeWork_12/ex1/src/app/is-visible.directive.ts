import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective implements OnInit {
  @Input() appIsVisible: boolean;
    constructor(private element: ElementRef, private renderer2: Renderer2) { }
  ngOnInit(): void {
    console.log(this.appIsVisible);
    if (!this.appIsVisible) {
      console.log('is it working');
      this.renderer2.setStyle(this.element.nativeElement, 'display', 'none');
    }
  }
}
