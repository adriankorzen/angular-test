import {Component, ComponentFactory, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {HelloWorldComponent} from '../hello-world/hello-world.component';
import {BayBayWorldComponent} from '../bay-bay-world/bay-bay-world.component';

@Component({
  selector: 'app-dynamic',
  template: `<ng-template #dynamic></ng-template>`,
})
export class DynamicComponent implements OnInit {
  @Input('componentType') compType: {name: string, type: string};

  @ViewChild('dynamic', {read: ViewContainerRef, static: true}) viewContainerRef: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    const compFac = this.getComponent();
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(compFac);
  }

  private getComponent(): ComponentFactory<any> {
    let componentFactory;
    if (this.compType.type === 'HelloWorld') {
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(HelloWorldComponent);
    } else {
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(BayBayWorldComponent);
    }
    return componentFactory;
  }

}
