import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DATA_SERVICE_TOKEN } from '@ng-mf/shared-services';
import { FirstPageService } from '../../services/first.service';
import { DynamicLoaderWithInputsComponent } from '../../components/dynamic/dynamic-loader-with-inputs.component';

@Component({
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ng-mf-fifth-page',
  template: `
    HELLO I AM FIFTH PAGE
  `,
})
export class FifthPageComponent {}
