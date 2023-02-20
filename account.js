class Account {
  constructor() {
    this.transactions = [];
    this.balance = 0;
  }

  getStatement() {
    console.log('date || credit || debit || balance');
    // Itterates through the nested array of transactions then console logs it in the correct format
    this.transactions.forEach((transaction) => {
      console.log(
        `${transaction[0].date} || ${transaction[0].credit || ''} || ${
          transaction[0].debit || ''
        }|| ${transaction[1]}`
      );
    });
  }

  getBalance() {
    return (this.balance * 1).toFixed(2);
  }

  withdraw(withdrawl) {
    this.balance -= withdrawl.debit * 1;
    // Creates an array of the withdrawl object plus the balance then pushes it to the start of the transactions array in constructor
    this.transactions.unshift([withdrawl, (this.balance * 1).toFixed(2)]);
  }

  deposit(deposit) {
    this.balance += deposit.credit * 1;
    // Creates an array of the deposit object plus the balance then pushes it to the start of the transactions array in constructor
    this.transactions.unshift([deposit, (this.balance * 1).toFixed(2)]);
  }
}

module.exports = Account;
