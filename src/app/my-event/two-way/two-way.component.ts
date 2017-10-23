import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html'
})
export class TwoWayComponent {
  person = {
    name: "mohamed",
    age: "22"
  }
  nbr : Number = 0
  nbrPlusPlus() : void {
    let tmp = this.nbr.valueOf()
    tmp ++
    console.log(tmp) 
  }
}
