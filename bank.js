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
        this.balance += Number(amount);
        bal.innerHTML = "<div>\u20B9".concat(this.balance, "</div>");
    };
    Bank.prototype.withdraw = function (amount) {
        if (this.balance - Number(amount) <= 0) {
            console.log("you cannot withdraw more than you have!!");
            return;
        }
        this.balance -= Number(amount);
        bal.innerHTML = "<div>\u20B9".concat(this.balance, "</div>");
    };
    return Bank;
}());
var User = new Bank();
depo.onclick = function () { return User.deposite(depoInput.value); };
draw.onclick = function () { return User.withdraw(drawInput.value); };
