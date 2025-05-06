{
  // type guards

  //  typeof -----> type guard

  type AlphaNumeric = string | number;

  const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  //    in guard

  type NormalUser = {
    name: string;
  };
  interface AdminUser extends NormalUser {
    role: "admin";
  }

  const admin: AdminUser = {
    name: "Nahid",
    role: "admin",
  };
  const normalUser: NormalUser = {
    name: "Pankha",
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name Is ${user.name} and my role is ${user?.role}`);
    } else {
      console.log(`My name Is ${user.name} `);
    }
  };

  getUser(normalUser);
  getUser(admin);

  //
}
