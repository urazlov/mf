import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MFComponent } from '../mf-component/mf-component';
import { LoadRemoteModuleOptions } from '@angular-architects/module-federation';

export type RemoteWithInputsProps = {
  show: boolean;
  items: string[];
};

@Component({
  standalone: true,
  providers: [],
  selector: 'ng-mf-remote-with-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-template #container></ng-template>`,
})
export class RemoteWithInputComponent extends MFComponent<RemoteWithInputsProps> {
  @ViewChild('container', { static: true, read: ViewContainerRef })
  readonly viewContainerRef!: ViewContainerRef;

  readonly configuration: LoadRemoteModuleOptions = {
    type: 'module',
    remoteEntry: 'http://localhost:4201/remoteEntry.mjs',
    exposedModule: 'RemoteWithInputsComponent',
  };
}
