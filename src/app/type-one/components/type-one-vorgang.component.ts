import {Component} from "@angular/core";
import {VorgangComponent} from "../../common/vorgang-component";
import {TypeOneVorgang} from "../model/type-one-vorgang";

@Component({
  selector: "type-one-item",
  template: "<div><span>{{vorgang.sortierungsFeld}} - {{vorgang.description}}</span></div>"

})
export class TypeOneVorgangComponent implements VorgangComponent {
  constructor(public vorgang: TypeOneVorgang){
  }

  get sortierungsFeld(): number {
    return this.vorgang.sortierungsFeld;
  }

}
