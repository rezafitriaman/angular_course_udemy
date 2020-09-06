import { Directive, ElementRef, Renderer2, HostListener, Input, HostBinding, OnInit } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{
    @Input() addShowClass: boolean = false;

    @HostBinding('class.show') isShown: boolean = this.addShowClass;
    
    constructor(private elRef: ElementRef, private renderer: Renderer2) {}
    
    ngOnInit() {
        this.isShown = this.addShowClass;
    }

    @HostListener('document:click', ['$event']) toggleShow(eventData: Event) {
        console.log('nativeElement', this.elRef.nativeElement)
        console.log('eventData', eventData.target)
        this.isShown = this.elRef.nativeElement.contains(eventData.target) ? !this.isShown : false;
        this.addClassToChild();
    }

    addClassToChild() {
        const action = this.isShown ? 'addClass' : 'removeClass';
        //todo look up queryselector for angular
        this.renderer[action](this.elRef.nativeElement.querySelector('.dropdown-menu'), 'show');
    }
}