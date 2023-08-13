const depo = document.getElementById("deposite") as HTMLButtonElement;
const depoInput = document.getElementById("depoInput") as HTMLInputElement;
const draw = document.getElementById("withdraw") as HTMLButtonElement;
const drawInput = document.getElementById("drawInput") as HTMLInputElement;
const bal = document.getElementById("balance") as HTMLElement;


class Bank {
    balance: number;
    constructor(){
        this.balance = 0;
    }
    
    deposite(amount: string){
        this.balance += Number(amount);
        bal.innerHTML = `<div>₹${this.balance}</div>`;
    }

    withdraw(amount: string){
        if(this.balance - Number(amount) <= 0){
            console.log("you cannot withdraw more than you have!!");
            return;
        }
        this.balance -= Number(amount);
        bal.innerHTML = `<div>₹${this.balance}</div>`;
    }
}

const User = new Bank();
depo.onclick = () => User.deposite(depoInput.value);
draw.onclick = () => User.withdraw(drawInput.value);