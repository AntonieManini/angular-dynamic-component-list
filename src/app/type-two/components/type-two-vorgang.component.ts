import {Component} from "@angular/core";
import {VorgangComponent} from "../../common/vorgang-component";
import {TypeTwoVorgang} from "../model/type-two-vorgang";

@Component({
  selector: "type-two-item",
  template: `<div>
    <span>{{vorgang.sortierungsFeld}} - {{vorgang.description}}</span>
    <a href="{{vorgang.link}}">Link</a>
  </div>`

})
export class TypeTwoVorgangComponent implements VorgangComponent {
  constructor(public vorgang: TypeTwoVorgang){
  }

  get sortierungsFeld(): number {
    return this.vorgang.sortierungsFeld;
  }

}
