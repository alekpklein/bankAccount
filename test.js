class BankAccount {
  constructor(_accountNumber, _owner) {
    this.accountNumber = _accountNumber;
    this.owner = _owner;
    this.transactions = [];
  }

  balance() {
    if (this.transactions.length === 0) {
      console.log("No History");
    } else {
      let sum = 0;
      for (let i = 0; i < this.transactions.length; i++) {
        sum += this.transactions[i].amount;
      }
      console.log("Current balance: $" + sum);
    }
  }

  deposit(amt) {
    let currTransaction = new Transaction(amt, this.owner);
    this.transactions.push(currTransaction);
  }

  charge(payee, amt) {
    let currTransaction = new Transaction(-amt, payee);
    this.transactions.push(currTransaction);
  }
}

class Transaction {
  constructor(_amount, _payee) {
    this.amount = _amount;
    this.payee = _payee;
    const d = new Date();
    this.date = d.getDate(); 
  }
}

let firstAccount = new BankAccount("123", "James Johnson");

firstAccount.deposit(10.5);
firstAccount.deposit(100.5);
firstAccount.charge("Some Company", 50);
firstAccount.balance();