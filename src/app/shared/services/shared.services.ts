import { Component, Injectable, Input, Output, EventEmitter } from '@angular/core'


@Injectable()
export class SharedService {
  @Output() authStatus: EventEmitter<any> = new EventEmitter();

   constructor() {}

   changeStatus() {
     this.authStatus.emit(false);
   }

   getEmittedValue() {
     return this.authStatus;
   }

} 