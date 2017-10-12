import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ViewUnitsComponent } from './feature/view-units/view-units.component';
import { UnitsService } from "app/feature/view-units/units.service";
import { MockHttpService } from "app/core/mock-http.service";

@NgModule({
  declarations: [
    AppComponent,
    ViewUnitsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UnitsService, MockHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
