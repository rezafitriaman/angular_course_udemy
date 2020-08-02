import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultBackgroundColor: string = 'transparent';
  @Input() defaultColor: string = 'black';
  @Input() heighlightBackgroundColor: string = 'darkBlue';
  @Input() heighlightColor: string = 'white';

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultBackgroundColor
  @HostBinding('style.color') color: string = this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    /* this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'darkBlue' )
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white' ) */
    this.backgroundColor =  this.defaultBackgroundColor
    this.color = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'darkBlue' )
    //this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white' )
    this.backgroundColor = this.heighlightBackgroundColor
    this.color =  this.heighlightColor;

  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent' )
    //this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black' )
    this.backgroundColor =  this.defaultBackgroundColor
    this.color = this.defaultColor;
  }
}
