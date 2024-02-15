import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CommsService } from '../comms.service';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrl: './parent-child.component.css',
})
export class ParentChildComponent implements OnDestroy {
  paro = 'Parent-child';
  childP = '';
  @Output() parentchild = new EventEmitter<string>();

  subscription: Subscription;
  constructor(private commservice: CommsService) {
    this.subscription = commservice
      .getParentChild()
      .subscribe((name) => (this.childP = name));
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  addInput(v: string) {
    this.parentchild.emit(v);
  }
}
