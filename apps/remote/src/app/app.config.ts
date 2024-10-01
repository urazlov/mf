import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MICROFRONTEDS_APP_ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(RouterModule.forRoot(MICROFRONTEDS_APP_ROUTES)),
  ],
};
