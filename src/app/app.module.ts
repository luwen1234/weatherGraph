import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabViewComponent } from './basic/tab-view/tab-view.component';
import {TabViewModule} from "primeng/tabview";
import {ButtonModule} from "primeng/button";
import { MegaMenuComponent } from './basic/mega-menu/mega-menu.component';
import {MegaMenuModule} from "primeng/megamenu";
import { PanelComponent } from './basic/panel/panel.component';
import {PanelModule} from "primeng/panel";
import {MenuModule} from "primeng/menu";
import {ToastModule} from "primeng/toast";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    TabViewComponent,
    MegaMenuComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TabViewModule,
    ButtonModule,
    MegaMenuModule,
    PanelModule,
    MenuModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
