import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'ng-mf-remote-entry',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div *ngIf="show">
      Component With Inputs @for (item of items; track item) {
      <li>{{ item }}</li>
      }
    </div>
  `,
})
export class RemoteWithInputsComponent {
  @Input() show = true;
  @Input() items: any[] = [];
}
