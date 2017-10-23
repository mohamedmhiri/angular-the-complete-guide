import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-client',
  templateUrl: './my-client.component.html'
})
export class MyClientComponent {
  // custom property binding
  @Input() myInput : Number = 5
  // custom event binding
  // 'mhiri' is it's alias in external components
  @Output() myEvent = new EventEmitter()

  sayHello() {
    this.myEvent.emit('my-client-event')
  }
}
