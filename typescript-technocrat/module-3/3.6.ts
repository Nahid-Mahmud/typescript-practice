{
  //  access modifiers
  class BankAccount {
    public readonly id: number;
    public readonly name: string;
    protected _balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    // public addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    // public getBalance() {
    //   return this._balance;
    // }

    get balance() {
      return this._balance;
    }
  }

  // protected

  class StudentAccount extends BankAccount {
    test() {
      // this.
    }
  }

  const poorManAccount = new BankAccount(123, "Mr. Goribs", 10);

  // set 
  poorManAccount.deposit = 50;

  const myBalance = poorManAccount.balance;
  console.log(myBalance);

  //   poorManAccount.id = 69;
  //   poorManAccount.balance = 0;
  // poorManAccount.addDeposit(20);
  // const myBalance = poorManAccount.getBalance();
  // console.log(myBalance);

  //
}
