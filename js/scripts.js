function Account (name, balance) {
  this.name = name,
  this.balance = balance
};

Account.prototype.withdraw = function (amount) {
  return this.balance -= amount; 
};

Account.prototype.deposit = function (amount) {
  return this.balance += amount;
}