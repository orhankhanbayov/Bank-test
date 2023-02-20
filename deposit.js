class Deposit {
  constructor(date, credit) {
    this.date = date;
    this.credit = (credit * 1).toFixed(2);
  }
}

module.exports = Deposit;
