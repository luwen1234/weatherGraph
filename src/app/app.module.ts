import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabViewComponent } from './basic/tab-view/tab-view.component';
import {TabViewModule} from "primeng/tabview";
import {ButtonModule} from "primeng/button";
import { MegaMenuComponent } from './basic/mega-menu/mega-menu.component';
import {MegaMenuModule} from "primeng/megamenu";
import { FieldSetComponent } from './basic/field-set/field-set.component';
import {FieldsetModule} from "primeng/fieldset";

@NgModule({
  declarations: [
    AppComponent,
    TabViewComponent,
    MegaMenuComponent,
    FieldSetComponent
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    ButtonModule,
    MegaMenuModule,
    FieldsetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
