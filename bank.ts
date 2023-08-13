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
        if (amount === "") {
            alert("Please enter a valid deposit amount.");
            return;
        }
        
        const depositAmount = Number(amount);
        if (isNaN(depositAmount) || depositAmount <= 0) {
            alert("Please enter a valid positive deposit amount.");
            return;
        }
        
        this.balance += depositAmount;
        bal.innerHTML = `<div>₹${this.balance}</div>`;
    }

    withdraw(amount: string){
        if (amount === "") {
            alert("Please enter a valid withdrawal amount.");
            return;
        }
        
        const withdrawalAmount = Number(amount);
        if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
            alert("Please enter a valid positive withdrawal amount.");
            return;
        }
        
        if (this.balance - withdrawalAmount < 0) {
            alert("You cannot withdraw more than you have.");
            return;
        }
        
        this.balance -= withdrawalAmount;
        bal.innerHTML = `<div>₹${this.balance}</div>`;
    }
}

const User = new Bank();
depo.onclick = () => User.deposite(depoInput.value);
draw.onclick = () => User.withdraw(drawInput.value);
