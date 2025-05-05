{
  //
  // mapped types

  const arrOfNumber: number[] = [1, 2, 3];

  //   const arrOffString: string[] = ["1", "2"];

  const arrOffString: string[] = arrOfNumber?.map((number) => number.toString());
  console.log(arrOfNumber);

  type AreaNumber = {
    height: number;
    width: number;
  };
  //   lookup types
  type Height = AreaNumber["height"];

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{
    height: string;
    width: number;
  }> = {
    height: "100",
    width: 100,
  };

  //
}
