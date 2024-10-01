import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DATA_SERVICE_TOKEN } from '@ng-mf/shared-services';
import { SecondPageService } from '../../services/seconds.service';
import { DynamicLoaderWithInputsComponent } from '../../components/dynamic/dynamic-loader-with-inputs.component';

@Component({
  standalone: true,
  imports: [DynamicLoaderWithInputsComponent],
  providers: [{ provide: DATA_SERVICE_TOKEN, useClass: SecondPageService }],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ng-mf-second-page',
  template: `HELLO I AM SECOND PAGE
    <ng-mf-dynamic-loader-with-inputs
      [options]="{
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.mjs',
      exposedModule: 'RemoteEntryComponent',
    }"
    ></ng-mf-dynamic-loader-with-inputs> `,
})
export class SecondPageComponent {}
