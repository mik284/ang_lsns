import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { CommsService } from '../comms.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent implements OnDestroy, OnInit {
  whoami: string = '';
  subscription: Subscription;

  
  constructor(private commservice: CommsService) {
    this.subscription = this.commservice.getName().subscribe((name) => {
      this.whoami = name;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.commservice.getName().subscribe((name) => {
      this.whoami = name;
    });
  }
}
