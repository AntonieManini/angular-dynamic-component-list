import {DynamicComponentFactory} from "../../common/dynamic-component-factory";
import {from} from "rxjs/index";
import {map} from "rxjs/operators";
import {VorgaengeService} from "../../common/vorgaenge-service";
import {VorgangComponent} from "../../common/vorgang-component";
import {TypeOneVorgang} from "../../type-one/model/type-one-vorgang";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/internal/Observable";
import {DynamicComponent} from "../../common/dynamic-component";
import {TypeTwoVorgang} from "../model/type-two-vorgang";
import {TypeTwoVorgangComponent} from "../components/type-two-vorgang.component";

@Injectable()
export class TypeTwoVorgaengeService implements VorgaengeService {
  private static MOCK_DATA: TypeOneVorgang[] = [
    new TypeTwoVorgang(2, "TypeTwo 1", "http://google.de"),
    new TypeTwoVorgang(4, "TypeTwo 2", "http://bing.de")
  ];

  constructor(private componentFactory: DynamicComponentFactory){

  }

  load(): Observable<DynamicComponent<VorgangComponent>> {
    return from(TypeTwoVorgaengeService.MOCK_DATA)
      .pipe(
        map(v => this.componentFactory.create(v, TypeTwoVorgang, TypeTwoVorgangComponent))
      )
  }

}
