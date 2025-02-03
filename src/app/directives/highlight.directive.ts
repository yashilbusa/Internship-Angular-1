import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private el:ElementRef) {}      //Dependency Injection Using Private Keyword

  @HostBinding("style.backgroundColor")
  bgcolor = "lightblue";

  @HostListener("mouseenter")
  changeFontSize(){
    this.el.nativeElement.style.fontSize="40px"
    console.log("Mouse Entered");
  }

  @HostListener("mouseleave")
  resetFontSize(){
    this.el.nativeElement.style.fontSize="16px"
    console.log("Mouse Leaved");
  }

}