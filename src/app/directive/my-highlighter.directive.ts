import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyHighlighter]'
})
export class MyHighlighterDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter', ['$event'])
  OnMouseEnter(event: any) {
    const text = event.target.innerText;
    switch (text) {
      case 'Bowler':
        this.highlight('Blue');
        break;
      case 'Batsman':
        this.highlight('Green');
        break;
      case 'WicketKeeper':
        this.highlight('Maroon');
        break;
      default:
        this.highlight(null);
        break;
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
