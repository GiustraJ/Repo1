import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '.appAnimations'
})
export class AnimationsDirective {

  constructor() { }

  @HostBinding('style.backgroundColor') private hover: boolean;

  @HostListener('mouseenter') onMouseEnter(){
    this.hover = true;
    console.log('hello');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.hover= false;
    console.log('goodbye');
  }


}
