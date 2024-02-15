import { Component, Inject, OnInit } from '@angular/core';
import { CommsService } from '../comms.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements OnInit {
  toto = 'Child';
  parentChildV = 'parent-child';

  constructor(private commsservice: CommsService) {}

  ngOnInit(): void {
    this.commsservice.updateParentChild(this.parentChildV);
    this.commsservice.updateName(this.toto)
  }

  updateName(name: string) {
    this.commsservice.updateName((this.toto = name));
  }

  updateParentchild(value: string) {
    this.commsservice.updateParentChild((this.parentChildV = value));
  }
}
