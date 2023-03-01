import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
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

  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput.value)
    this.serverCreated.emit(new Server(nameInput.value, this.newServerContent));
  }

  onAddBluePrint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit(new Server(nameInput.value, this.newServerContent));
  }
}
