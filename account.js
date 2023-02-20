class Account {
  constructor() {
    this.transactions = [];
    this.balance = 0;
  }

  getStatement() {
    console.log('date || credit || debit || balance');
    this.transactions.forEach((transaction) => {
      console.log(
        `${transaction[0].date} || ${transaction[0].credit} || ${transaction[0].debit} || ${transaction[1]}`
      );
    });
  }

  withdraw(transaction) {
    this.balance -= transaction.debit;
    this.transactions.unshift([transaction, this.balance.toFixed(2)]);
  }

  deposit(transaction) {
    this.balance += transaction.credit;
    this.transactions.unshift([transaction, this.balance.toFixed(2)]);
  }
}

module.exports = Account;
