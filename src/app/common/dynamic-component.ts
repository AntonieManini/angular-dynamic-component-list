import {ViewRef} from "@angular/core";

export interface DynamicComponent<T> {
  component: T;
  viewRef: ViewRef;
}
