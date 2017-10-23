import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { CustomerPrepertyComponent } from './binding/customer-preperty/customer-preperty.component';
import { MyEventComponent } from './my-event/my-event.component';
import { MyClientComponent } from './my-event/my-client/my-client.component';
import { TwoWayComponent } from './my-event/two-way/two-way.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    CustomerPrepertyComponent,
    MyEventComponent,
    MyClientComponent,
    TwoWayComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
