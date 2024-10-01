import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote',
  exposes: {
    './Routes': 'apps/remote/src/app/app.routes.ts',
    RemoteEntryComponent: 'apps/remote/src/app/remote-entry/entry.component.ts',
    RemoteWithInputsComponent:
      'apps/remote/src/app/component-with-inputs/remote-with-inputs.component.ts',
    CustomWebComponent: 'apps/remote/src/app/web-component/web.component.ts'
  },
};

export default config;
