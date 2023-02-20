const Account = require('../account');

describe('account', () => {
  describe('balance is calculated correctly', () => {
    it('balance is 0 when new account created', () => {
      const bank = new Account();
      expect(bank.balance).toBe(0);
    });

    it('adds 1000 to balance when deposit is made', () => {
      const bank = new Account();
      let deposit = { date: '20/02/2023', debit: '', credit: 1000 };
      bank.deposit(deposit);
      expect(bank.balance).toBe(1000);
    });

    it('balance is 500 after withdrawl of 1000 is made', () => {
      const bank = new Account();
      let deposit1 = { date: '20/02/2023', debit: '', credit: 1500 };
      bank.deposit(deposit1);
      let withdrawl = { date: '20/02/2023', debit: 1000, credit: '' };
      bank.withdraw(withdrawl);
      expect(bank.balance).toBe(500);
    });
  });
});
