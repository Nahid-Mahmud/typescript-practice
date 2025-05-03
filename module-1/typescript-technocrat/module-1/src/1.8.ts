//destructuring
{
  type user = {
    id: number;
    name: {
      fName: string;
      lName: string;
    };
    phone: string;
  };

  const user: user = {
    id: 25,
    name: {
      fName: "Nahid",
      lName: "Mahmud",
    },
    phone: "014785236987",
  };

  const {
    phone: phoneNumber,
    name: { fName: firstName, lName: lastName },
  } = user;

  //arr destructuring

  const friendList = ["nahid", "rubi", "dada"];

  const [, bestFriend] = friendList;
}
