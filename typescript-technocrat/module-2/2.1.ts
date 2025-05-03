{
  // type assertion

  let anything: any;

  anything = "Next level Development";

  const anyLength = (anything as string).length;

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `converted value is ${convertedValue}`;
    }

    if (typeof value === "number") {
      return value * 1000;
    }

    // return `input a valid number`;
  };

  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("1000") as string;

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
}
