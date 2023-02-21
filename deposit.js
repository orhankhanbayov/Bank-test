class Deposit {
  constructor(credit) {
    this.date = new Date(Date.now()).toLocaleDateString('en-GB');
    this.credit = (credit * 1).toFixed(2);
  }
}
module.exports = Deposit;
