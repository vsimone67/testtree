import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TableRowExpansionDemo } from "./tablerowexpansiondemo";

const routes: Routes = [{ path: "treedemo", component: TableRowExpansionDemo }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
