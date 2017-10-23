import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-preperty',
  templateUrl: './customer-preperty.component.html'
})
export class CustomerPrepertyComponent  {

  @Input() result : Number = 0
  // to make it available outside this component
    @Output() clicked = new EventEmitter<String>()

    onClicked() {
      this.clicked.emit('This is emitter')
    }  
}
