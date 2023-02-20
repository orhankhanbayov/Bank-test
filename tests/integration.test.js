const Account = require('../account');
const Transaction = require('../transaction');

describe('Account and transaction integration', () => {
  describe('balance is calculated correctly', () => {
    it('balance is 0 when new account created', () => {
      const bank = new Account();
      expect(bank.balance).toBe(0);
    });

    it('adds 1000 to balance when deposit is made', () => {
      const bank = new Account();
      const deposit1 = new Transaction('20/02/2023', 1000, '');
      bank.deposit(deposit1);
      expect(bank.balance).toBe(1000);
    });

    it('balance is 500 after withdrawl of 1000 is made', () => {
      const bank = new Account();
      const deposit1 = new Transaction('20/02/2023', 1500, '');
      bank.deposit(deposit1);
      const withdrawl = new Transaction('20/02/2023', '', 1000);
      bank.withdraw(withdrawl);
      expect(bank.balance).toBe(500);
    });
  });

  describe('statement is correctly formatted', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    const bank = new Account();
    const deposit1 = new Transaction('20/02/2023', 1500, '');
    bank.deposit(deposit1);
    bank.getStatement();
    expect(logSpy).toHaveBeenCalledWith('date || credit || debit || balance');
    expect(logSpy).toHaveBeenCalledWith('20/02/2023 || 1500 ||  || 1500.00');
  });
});
