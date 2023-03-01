import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Server } from '../model/server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  newServerName = '';
  newServerContent = '';

  @Output() serverCreated = new EventEmitter<Server>;
  @Output() bluePrintCreated = new EventEmitter<Server>;
  @ViewChild('serverContentInput') serverContentInput!: ElementRef;

  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput)
    console.log(nameInput.value)
    this.serverCreated.emit(new Server(nameInput.value, this.serverContentInput.nativeElement.value));
  }

  onAddBluePrint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit(new Server(nameInput.value, this.serverContentInput.nativeElement.value));
  }
}
