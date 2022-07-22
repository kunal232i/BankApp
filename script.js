const depo = document.getElementById("deposite");
const depoInput = document.getElementById("depoInput");
const draw = document.getElementById("withdraw");
const drawInput = document.getElementById("drawInput");
const bal = document.getElementById("balance");

class Bank {
  constructor() {
    this.balance = 0;
  }

  deposite(amount) {
    this.balance += Number(amount);
    console.log(`Balance: ${this.balance}`);
    bal.innerHTML = `<div>₹${this.balance}</div>`;
  }
  withdraw(amount) {
    if (this.balance - amount <= 0) {
      console.log("you cannot withdraw more than you have!!");
      return;
    }
    this.balance -= Number(amount);
    console.log(`Balance: ${this.balance}`);
    bal.innerHTML = `<div>₹${this.balance}</div>`;
  }
}

const Kunal = new Bank();
console.log(Kunal);

depo.onclick = () => Kunal.deposite(depoInput.value);
draw.onclick = () => Kunal.withdraw(drawInput.value);
