{
  //

  //interface
  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRole2 extends User2 {
    role: string;
  }

  type UserWithRole1 = User1 & { role: string };

  const user1: UserWithRole1 = {
    name: "Nahid",
    age: 999,
    role: "Dev",
  };

  const user2: UserWithRole2 = {
    name: "Nahid Mahmud",
    age: 999,
    role: "Developer",
  };

  type Roll1 = number[];
  interface Roll2 {
    [index: number]: number;
  }

  const roll: Roll1 = [1, 2, 2];
  const roll2: Roll2 = [1, 2, 2];

  type Add1 = (number1: number, number2: 2) => number;

  interface Add2 {
    (number1: number, number2: number): number;
  }

  const add: Add2 = (x, y) => {
    return x + y;
  };

  //
}
