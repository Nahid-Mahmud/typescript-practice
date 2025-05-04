interface Developer<T, A = null> {
  name: string;
  role: string;
  company: T;
  address?: A;
}

interface companyWithNameAndExp {
  name: string;
  exp: number;
}

const dev1: Developer<string> = {
  name: "HRM",
  role: "TI",
  company: "RR",
};

interface Address {
  cName: string;
  post: number;
}

const dev2: Developer<companyWithNameAndExp, Address> = {
  name: "HRM",
  role: "TI",
  company: {
    name: "NN",
    exp: 22,
  },
  address: {
    cName: "Dinajpur",
    post: 5200,
  },
};
