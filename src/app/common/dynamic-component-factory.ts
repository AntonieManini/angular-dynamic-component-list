import {VorgangComponent} from "./vorgang-component";
import {DynamicComponent} from "./dynamic-component";
import {ComponentFactoryResolver, Injectable, Injector, Type} from "@angular/core";

@Injectable()
export class DynamicComponentFactory {
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector){

  }

  public create<T>(data: T, dataType: Type<T>, componentType: Type<any>): DynamicComponent<VorgangComponent> {
    const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    const childInjector = Injector.create({
      parent: this.injector,
      providers: [
        {provide: dataType, useValue: data}
      ]
    });

    const created = factory.create(childInjector);
    return {
      component: created.instance,
      viewRef: created.hostView
    }
  }

}
