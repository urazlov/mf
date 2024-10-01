import {
  loadRemoteModule,
  LoadRemoteModuleOptions,
} from '@angular-architects/module-federation';
import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  effect,
  input,
  ViewChild,
  OnInit,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'ng-mf-dynamic-loader-with-inputs',
  standalone: true,
  template: ` <ng-template #placeHolder></ng-template> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicLoaderWithInputsComponent implements OnInit {
  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  private readonly viewContainer!: ViewContainerRef;

  private componentRef: ComponentRef<any> | null = null;

  readonly inputs = input<Record<string, unknown>>();
  readonly options = input.required<LoadRemoteModuleOptions>();

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
    const module = await loadRemoteModule(this.options());

    this.componentRef = this.viewContainer.createComponent(
      module[this.options().exposedModule]
    );

    const inputs = this.inputs();

    if (inputs) this.updateInputs(inputs);
  }

  private updateInputs(inputs: Record<string, unknown>): void {
    if (this.componentRef && inputs) {
      for (const [key, value] of Object.entries(inputs)) {
        this.componentRef.setInput(key, value);
      }
    }
  }
}
