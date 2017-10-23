import { Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html'
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('OnInit')
  }

  ngOnChanges() {
    console.log('OnChanges')
  }

  ngDoCheck() {
    console.log('DoCheck')
  }

  ngAfterContentInit() {
    console.log('AfterContentInit')
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked')
  }
  ngAfterViewInit() {
    console.log('AfterViewInit')
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked')
  }
   
  ngOnDestroy() {
    console.log('OnDestroy')
  }
}
