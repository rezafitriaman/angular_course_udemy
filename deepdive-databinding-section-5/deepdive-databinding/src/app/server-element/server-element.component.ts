import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, 
    AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy, ViewChild, ElementRef, ContentChild} from '@angular/core'

import {ElementsServer} from '../../type/global.type'
@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
    AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {
    @Input('srvElement') element: ElementsServer;
    @Input() name: string;
    @ViewChild('heading') header: ElementRef;
    @ContentChild('contentParagraph') paragraph: ElementRef;
    
    constructor() {
        console.log('constructor');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges'),
        console.log(changes) 
    }

    ngOnInit(): void {
        console.log('ngOnInit') 
        console.log('textContent: ', this.header)
        console.log('paragraph: ', this.paragraph) 
    }

    ngDoCheck() {
        console.log('ngDoCheck')
    }

    ngAfterContentInit() {
        console.log('AfterContentInit')
        console.log('paragraph: ', this.paragraph.nativeElement.textContent) 
    }

    ngAfterContentChecked() {
        console.log('ngAfterContentChecked')
        console.log('paragraph: ', this.paragraph.nativeElement.querySelector('li').textContent) 
        
    }

    ngAfterViewInit() {
        console.log('AfterViewInit')
        console.log('textContent: ' , this.header.nativeElement.textContent) 
    }

    ngAfterViewChecked() {
        console.log('AfterViewChecked')
        console.log('textContent: ' , this.header.nativeElement.textContent) 
    }

    ngOnDestroy(){
        console.log('ngOnDestroyd')
    }
} 