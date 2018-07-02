import {Observable} from "rxjs/internal/Observable";
import {VorgangComponent} from "./vorgang-component";
import {DynamicComponent} from "./dynamic-component";

export interface VorgaengeService {
  load(): Observable<DynamicComponent<VorgangComponent>>
}
