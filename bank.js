var depo = document.getElementById("deposite");
var depoInput = document.getElementById("depoInput");
var draw = document.getElementById("withdraw");
var drawInput = document.getElementById("drawInput");
var bal = document.getElementById("balance");
var Bank = /** @class */ (function () {
    function Bank() {
        this.balance = 0;
    }
    Bank.prototype.deposite = function (amount) {
        if (amount === "") {
            alert("Please enter a valid deposit amount.");
            return;
        }
        var depositAmount = Number(amount);
        if (isNaN(depositAmount) || depositAmount <= 0) {
            alert("Please enter a valid positive deposit amount.");
            return;
        }
        this.balance += depositAmount;
        bal.innerHTML = "<div>\u20B9".concat(this.balance, "</div>");
    };
    Bank.prototype.withdraw = function (amount) {
        if (amount === "") {
            alert("Please enter a valid withdrawal amount.");
            return;
        }
        var withdrawalAmount = Number(amount);
        if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
            alert("Please enter a valid positive withdrawal amount.");
            return;
        }
        if (this.balance - withdrawalAmount < 0) {
            alert("You cannot withdraw more than you have.");
            return;
        }
        this.balance -= withdrawalAmount;
        bal.innerHTML = "<div>\u20B9".concat(this.balance, "</div>");
    };
    return Bank;
}());
var User = new Bank();
depo.onclick = function () { return User.deposite(depoInput.value); };
draw.onclick = function () { return User.withdraw(drawInput.value); };
