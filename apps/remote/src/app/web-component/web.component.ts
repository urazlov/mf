import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'custom-web-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div style="border: 1px solid red;">
      <h1>Custom Web Element</h1>
      <p>{{ inputData }}</p>
      <ng-container *ngIf="showText"> 'I SEE THE TEXT' </ng-container>
      <button (click)="emitEvent()">Emit Event</button>
    </div>
  `,
})
export class CustomWebComponent {
  @Input() inputData: string = '';
  @Input({ transform: booleanAttribute }) showText!: boolean;

  @Output() outputEvent = new EventEmitter<string>();

  constructor() {}

  emitEvent() {
    this.outputEvent.emit('Event emitted from custom web component');
  }
}
