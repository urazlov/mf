import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RemoteWithInputComponent } from '../../components/remote-input/remote-input.component';

@Component({
  standalone: true,
  imports: [RemoteWithInputComponent],
  providers: [],
  selector: 'ng-mf-second-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `HELLO I AM THIRD PAGE
    <button (click)="changeShow()">Change Show Input</button>
    <button (click)="changeItems()">Change Items Input</button>
    <ng-mf-remote-with-input [inputs]="inputs"></ng-mf-remote-with-input> `,
})
export class ThirdPageComponent {
  inputs = {
    show: true,
    items: ['hello', 'from', 'input'],
  };

  changeShow() {
    this.inputs = { ...this.inputs, show: !this.inputs.show };
  }

  changeItems() {
    this.inputs = { ...this.inputs, items: ['hello', 'goobye'] };
  }
}
