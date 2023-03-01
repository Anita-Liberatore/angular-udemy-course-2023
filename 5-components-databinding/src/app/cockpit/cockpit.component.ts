import { Component, EventEmitter, Output } from '@angular/core';
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

  onAddServer() {
    this.serverCreated.emit(new Server(this.newServerName, this.newServerContent));
  }

  onAddBluePrint() {
    this.bluePrintCreated.emit(new Server(this.newServerName, this.newServerContent));
  }
}
