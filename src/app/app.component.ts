import {Component, Inject, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {VORGANG_SERVICES_TOKEN} from "./injection-tokens";
import {VorgaengeService} from "./common/vorgaenge-service";
import {merge} from "rxjs/internal/observable/merge";
import {VorgangComponent} from "./common/vorgang-component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private items: VorgangComponent[] = [];

  @ViewChild("vorgaengeContainer", { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(@Inject(VORGANG_SERVICES_TOKEN) private vorgaengeServices: VorgaengeService[]){
  }

  ngOnInit(): void {
    this.container.clear();

    merge(
      ...this.vorgaengeServices.map(s => s.load())
    ).subscribe(comp => {
      let index = 0;
      const currentValue = comp.component.sortierungsFeld;
      for(var i = 0; i < this.items.length; i++){
        if(currentValue > this.items[i].sortierungsFeld){
          index = i + 1;
        }
      }

      this.items.splice(index, 0, comp.component);
      this.container.insert(comp.viewRef, index);
    });
  }

}
