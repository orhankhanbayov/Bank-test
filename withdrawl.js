class Withdrawl {
  constructor(date, debit) {
    this.date = date;
    this.debit = (debit * 1).toFixed(2);
  }
}

module.exports = Withdrawl;
