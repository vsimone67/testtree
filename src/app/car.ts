import { Underwriter } from "./Underwriter";

export interface Car {
  vin?;
  year?;
  brand?;
  color?;
  price?;
  saleDate?;
  Underwriter: Array<Underwriter>;
}
