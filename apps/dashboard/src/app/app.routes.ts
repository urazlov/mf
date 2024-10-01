import { Route } from '@angular/router';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { FourthPageComponent } from './pages/fourth-page/fourth-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { ThirdPageComponent } from './pages/third-page/third-page.component';
import { FifthPageComponent } from './pages/fifth-page/fifth-page.component';

export const appRoutes: Route[] = [
  {
    path: 'first',
    component: FirstPageComponent,
  },
  {
    path: 'second',
    component: SecondPageComponent,
  },
  {
    path: 'third',
    component: ThirdPageComponent,
  },
  {
    path: 'fourth',
    component: FourthPageComponent,
  },
  {
    path: '',
    component: FifthPageComponent,
  },
];
