import {
  loadRemoteModule,
  LoadRemoteModuleOptions,
} from '@angular-architects/module-federation';
import {
  ComponentRef,
  effect,
  input,
  OnInit,
  ViewContainerRef,
  Directive,
} from '@angular/core';

export type MFInputs<T> = {
  [K in keyof T]: T[K];
};

@Directive()
export abstract class MFComponent<Component> implements OnInit {
  abstract viewContainerRef: ViewContainerRef;
  abstract configuration: LoadRemoteModuleOptions;

  private componentRef!: ComponentRef<Component>;

  readonly inputs = input<MFInputs<Component>>();

  constructor() {
    effect(() => {
      const inputs = this.inputs();
      if (inputs) this.updateInputs(inputs);
    });
  }

  ngOnInit(): void {
    this.load();
  }

  async load(): Promise<void> {
    const module = await loadRemoteModule(this.configuration);

    this.componentRef = this.viewContainerRef.createComponent(
      module[this.configuration.exposedModule]
    );

    const inputs = this.inputs();

    if (inputs) this.updateInputs(inputs);
  }

  private updateInputs(inputs: MFInputs<Component>): void {
    if (this.componentRef && inputs) {
      for (const [key, value] of Object.entries(inputs)) {
        this.componentRef.setInput(key, value);
      }
    }
  }
}
