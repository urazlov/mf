import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicLoaderWithInputsComponent } from '../../components/dynamic/dynamic-loader-with-inputs.component';

@Component({
  standalone: true,
  imports: [DynamicLoaderWithInputsComponent],
  providers: [],
  selector: 'ng-mf-second-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `HELLO I AM FOUTH PAGE
    <ng-mf-dynamic-loader-with-inputs
      [options]="{
        type: 'module',
        remoteEntry: 'http://localhost:4300/remoteEntry.mjs',
        exposedModule: 'AppComponent'
      }"
    ></ng-mf-dynamic-loader-with-inputs> `,
})
export class FourthPageComponent {}
