import {Injectable} from "@angular/core";
import {VorgaengeService} from "../../common/vorgaenge-service";
import {VorgangComponent} from "../../common/vorgang-component";
import {TypeOneVorgang} from "../model/type-one-vorgang";
import {from} from 'rxjs';
import {Observable} from "rxjs/internal/Observable";
import {map} from "rxjs/operators";
import {DynamicComponent} from "../../common/dynamic-component";
import {DynamicComponentFactory} from "../../common/dynamic-component-factory";
import {TypeOneVorgangComponent} from "../components/type-one-vorgang.component";


@Injectable()
export class TypeOneVorgaengeService implements VorgaengeService {
  private static MOCK_DATA: TypeOneVorgang[] = [
    new TypeOneVorgang(3, "TypeOne 1"),
    new TypeOneVorgang(1, "TypeOne 2")
  ];

  constructor(private componentFactory: DynamicComponentFactory){

  }

  load(): Observable<DynamicComponent<VorgangComponent>> {
    return from(TypeOneVorgaengeService.MOCK_DATA)
      .pipe(
        map(v => this.componentFactory.create(v, TypeOneVorgang, TypeOneVorgangComponent))
      )
  }

}
