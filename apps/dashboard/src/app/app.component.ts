import { loadRemoteModule } from '@angular-architects/module-federation';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Injector,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { createCustomElement } from '@angular/elements';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'ng-mf-root',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul>
      <!-- <li><a routerLink="/">First</a></li>
      <li><a routerLink="/second">Second Page</a></li>
      <li><a routerLink="/third">Third Page</a></li>
      <li><a routerLink="/fourth">Fourth Page</a></li> -->
      <custom-web-component
        input-data="HELLO"
        [attr.show-text]="isShowText ? true : null"
        (outputEvent)="handleOutputEvent($event)"
      ></custom-web-component>
    </ul>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  public isShowText = false;
  constructor(private injector: Injector) {
    this.loadWebComponent(this.injector);
  }

  async loadWebComponent(injector: Injector) {
    const remoteModule = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.mjs',
      exposedModule: 'CustomWebComponent',
    });

    const webCompnent = createCustomElement(
      remoteModule['CustomWebComponent'],
      { injector }
    );

    customElements.define('custom-web-component', webCompnent);
  }

  handleOutputEvent(event: any) {
    console.log(event.detail);
    this.isShowText = !this.isShowText;
  }
}
