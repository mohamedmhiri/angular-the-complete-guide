import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
        <!--<fa-binding></fa-binding>-->
        <app-my-event></app-my-event>
        <!--<app-lifecycle *ngIf="!delete">
            <p>{{ paragraph }}</p>
        </app-lifecycle>
        <button (click)="delete = true">Delete</button>--> 
    `,// $event to extract data from inside the 'onClicked' method
  styles: [`
        h1{
            color: #548451;
            text-align: center;
        }
    `]
})
export class AppComponent {
  paragraph = 'this is paragraph'
  
}
