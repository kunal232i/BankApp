class Bank {
  constructor(name) {
    this.name = name;
    this.balance = 0;
  }

  deposite(money) {
    this.balance += money;
    console.log(`Balance: ${this.balance}`);
  }
  withdraw(money) {
    this.balance -= money;
    console.log(`Balance: ${this.balance}`);
  }
}

const Kunal = new Bank("kunal");
console.log(Kunal);
Kunal.deposite(100);
Kunal.withdraw(30);
