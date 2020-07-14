import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
  @Output('srCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName: string = '';
  //newServerContent: string = '';
  @ViewChild('inputServerContent') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  
  onAddServer(serverNameElm: HTMLInputElement) {
    this.serverCreated.emit({serverName: serverNameElm.value, serverContent: this.serverContentInput.nativeElement.value})
  }

  onAddBlueprint(serverNameElm: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: serverNameElm.value, serverContent: this.serverContentInput.nativeElement.value})
  }
}
