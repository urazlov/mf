import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DATA_SERVICE_TOKEN } from '@ng-mf/shared-services';
import { FirstPageService } from '../../services/first.service';
import { DynamicLoaderWithInputsComponent } from '../../components/dynamic/dynamic-loader-with-inputs.component';

@Component({
  standalone: true,
  imports: [CommonModule, DynamicLoaderWithInputsComponent],
  providers: [{ provide: DATA_SERVICE_TOKEN, useClass: FirstPageService }],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ng-mf-first-page',
  template: `
    HELLO I AM FIRST PAGE
    <ng-mf-dynamic-loader-with-inputs
      [options]="{
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.mjs',
      exposedModule: 'RemoteEntryComponent',
    }"
    ></ng-mf-dynamic-loader-with-inputs>
  `,
})
export class FirstPageComponent {}
