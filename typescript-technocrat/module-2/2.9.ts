{
  //
  // conditional type
  type a1 = null;
  type b1 = undefined;
  type x = a1 extends null ? boolean : string; // conditional

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };

  //   car/bike/ship/tractor
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasBike = CheckVehicle<"ship">;

  //
}
