import { CustomerPrepertyComponent } from './customer-preperty/customer-preperty.component';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'fa-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
    StringInterpolation = 'This is a String!!'
    NumberInterpolation = 55

    getAge () : Number {
      return 22
    }

    clickMe() : void {
      let nbr =0
      console.log( ++ nbr )
    }
    onClicked(value: String) {
      alert (value)
    }     
}
