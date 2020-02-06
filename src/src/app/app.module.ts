import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TableModule } from "primeng/table";
import { TableRowExpansionDemo } from "./tablerowexpansiondemo";
import { CarService } from "./carservice";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [AppComponent, TableRowExpansionDemo],
  imports: [BrowserModule, AppRoutingModule, TableModule, HttpClientModule],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
