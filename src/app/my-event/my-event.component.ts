import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-event',
  templateUrl: './my-event.component.html'
})
export class MyEventComponent {

  sayHello(value: String) :void {
    alert(value)
  }
}
