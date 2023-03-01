import { Component } from '@angular/core';
import { Server } from './model/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: Server[] = [{
    type: 'server',
    name: 'Name server',
    content: 'Content'
  }];
  

  onAddServerAdded(serverData: Server) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }

  onAddBlueprintAdded(serverData: Server) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.name,
      content: serverData.content
    });
  } 

  
}
