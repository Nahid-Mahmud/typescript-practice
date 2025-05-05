{
  //
  //   utility types

  //pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type Name = Pick<Person, "name">;
  type NameAge = Pick<Person, "name" | "age">;

  //   Omit

  type ContactInfo = Omit<Person, "name" | "age">;

  //   Required

  type PersonRequired = Required<Person>;

  //   Partial

  type PersonPartial = Partial<Person>;

  //ReadOnly

  type PersonReadOnly = Readonly<Person>;

  const person1: PersonReadOnly = {
    age: 1,
    contactNo: "01",
    name: "asd",
  };

  //   person1.email = "nahid@gmail.com";

  // record Type

  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };

  type MyObj = Record<string, string>;
  const emptyObj: Record<string, unknown> = {};

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
  };

  //
}
