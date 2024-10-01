import { Routes } from '@angular/router';
import { RemoteEntryComponent } from './remote-entry/entry.component';
import { RemoteWithInputsComponent } from './component-with-inputs/remote-with-inputs.component';
import { CustomWebComponent } from './web-component/web.component';

export const MICROFRONTEDS_APP_ROUTES: Routes = [
  {
    path: 'remote',
    component: RemoteEntryComponent,
    pathMatch: 'full',
  },
  {
    path: 'inputs',
    component: RemoteWithInputsComponent,
    pathMatch: 'full',
  },
  {
    path: 'custom',
    component: CustomWebComponent,
    pathMatch: 'full',
  },
];
