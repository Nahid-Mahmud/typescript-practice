{
  // generic types

  type GenericType<T> = Array<T>; //T -------> Param

  //   const rollNumber: number[] = [1, 2, 3, 4];
  const rollNumber: GenericType<number> = [1, 2, 3, 4]; // generic type

  //   const friends: string[] = ["Nahid", "X", "Y"];
  const friends: GenericType<string> = ["Nahid", "X", "Y"]; // generic type

  //   const results: boolean[] = [true, false, true, false];
  const results: GenericType<boolean> = [true, false, true, false]; // generic type

  const user: GenericType<object> = [
    {
      name: "nahid",
      age: "200",
    },
    {
      name: "mahmud",
      age: 500,
    },
  ];

  //
}
