{
  //
  //   nullable type and unknown types
  const searchName = (v: string | null) => {
    if (v) {
      console.log("Searching");
      return;
    }
    console.log("There is noting to search");
  };

  //   searchName(null);

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log({ convertedSpeed });
    }

    if (typeof value === "string") {
      const convertToNumber = Number(value?.split(" ")[0]);
      const convertedSpeed = ((convertToNumber * 1000) / 3600).toFixed(2);
      console.log({ convertedSpeed: convertedSpeed + ` m/s` });
    }
  };

  //   getSpeedInMeterPerSecond("50 km/h");

  const throwError = (msg: string): never => {
    throw new Error(msg);
  };
  throwError("Internal Error");
  //
}
