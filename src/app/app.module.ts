import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {VORGANG_SERVICES_TOKEN} from "./injection-tokens";
import {TypeOneVorgaengeService} from "./type-one/service/type-one-vorgaenge.service";
import {TypeOneVorgangComponent} from "./type-one/components/type-one-vorgang.component";
import {DynamicComponentFactory} from "./common/dynamic-component-factory";
import {TypeTwoVorgangComponent} from "./type-two/components/type-two-vorgang.component";
import {TypeTwoVorgaengeService} from "./type-two/service/type-two-vorgaenge.service";

@NgModule({
  declarations: [
    AppComponent,
    TypeOneVorgangComponent,
    TypeTwoVorgangComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    TypeOneVorgangComponent,
    TypeTwoVorgangComponent
  ],
  providers: [
    DynamicComponentFactory,
    {provide: VORGANG_SERVICES_TOKEN, useClass: TypeOneVorgaengeService, multi: true},
    {provide: VORGANG_SERVICES_TOKEN, useClass: TypeTwoVorgaengeService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
