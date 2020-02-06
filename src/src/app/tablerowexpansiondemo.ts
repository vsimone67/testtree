import { Component, OnInit } from "@angular/core";

import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { Car } from "./car";
import { CarService } from "./carservice";
import { Underwriter } from "./Underwriter";

@Component({
  templateUrl: "./tablerowexpansiondemo.html",
  animations: [
    trigger("rowExpansionTrigger", [
      state(
        "void",
        style({
          transform: "translateX(-10%)",
          opacity: 0
        })
      ),
      state(
        "active",
        style({
          transform: "translateX(0)",
          opacity: 1
        })
      ),
      transition("* <=> *", animate("400ms cubic-bezier(0.86, 0, 0.07, 1)"))
    ])
  ]
})
export class TableRowExpansionDemo implements OnInit {
  cars: Car[];

  cols: any[];

  selectedUnderwriter: Array<Underwriter>;
  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => (this.cars = cars));

    this.cols = [
      { field: "vin", header: "Vin" },
      { field: "year", header: "Year" },
      { field: "brand", header: "Brand" },
      { field: "color", header: "Color" }
    ];
  }

  onRowExpand(event) {
    this.carService.getUnderwriter().then(uw => {
      event.data.Underwriter = uw;
    });
  }
}
