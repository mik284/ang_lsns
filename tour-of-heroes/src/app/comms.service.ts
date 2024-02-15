import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface Obj {
  name: string;
}
@Injectable({
  providedIn: 'root',
})
export class CommsService {
  private obj = new Subject<string>();

  private parentchild = new Subject<string>();

  constructor() {}

  updateName(v: string) {
    // console.log('ffsgfs', v);
    this.obj.next(v);
  }

  getName() {
    return this.obj.asObservable();
  }

  updateParentChild(value: string) {
    this.parentchild.next(value);
  }

  getParentChild() {
    return this.parentchild.asObservable();
  }
}
