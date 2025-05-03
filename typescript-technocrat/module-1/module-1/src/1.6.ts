{
  // learning functions

  // normal function

  function add(x: number, y: number): number {
    return x + y;
  }

  const result = add(5, 6);

  const addNumber = (x: number, y: number, z: number): number => x + y + z;

  const poorUser: {
    name: string;
    balance: number;
    addBalance: (balance: number) => string;
  } = {
    name: "Nahid",
    balance: 0,
    addBalance(balance: number): string {
      return `My new Balance Is  ${this.balance + balance}`;
    },
  };

  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const squiredNumber: number[] = numbers?.map((element: number): number => element * element);
}
