class Withdrawl {
  constructor(debit) {
    this.date = new Date(Date.now()).toLocaleDateString('en-GB');
    this.debit = (debit * 1).toFixed(2);
  }
}

module.exports = Withdrawl;
